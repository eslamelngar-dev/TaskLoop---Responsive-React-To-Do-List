import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useEffect, useState, useContext} from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToDo from "./ToDo";
import AddButton from "./AddButton";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import EmptyList from "./emptyList";
import { todosContext } from "../Contexts/todosContext";
import "../app.css";


export default function ToDoList() {
  const {todos,setToDos} = useContext(todosContext)

  const [displayedTodos, setdisplayedTodos] = useState("All");
  const [newTaskInput, setnewTaskInput] = useState("");

  const changeDisplayedTodos = (e) => {
    setdisplayedTodos(e.target.value);
  };

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || []
    setToDos(storageTodos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const completedTodos = todos.filter((t) => {
    return t.isDone
  })
  const notCompletedTodos = todos.filter((t) => {
    return !t.isDone
  })

  let todosToBeRender = todos
  
  if(displayedTodos == "done"){
    todosToBeRender = completedTodos
  }else if (displayedTodos == "undone"){
    todosToBeRender = notCompletedTodos
  }else{
    todosToBeRender = todos
  }


  function handelDoneCheck(todoID){
    const updatedTodos = todos.map((t)=> {
      if(t.id == todoID){
        t.isDone = !t.isDone
      }
      return t
    })
    setToDos(updatedTodos)
    localStorage.setItem("todos",JSON.stringify(updatedTodos))
  }

  const todo = todosToBeRender.slice().reverse().map((t) => (
    <ToDo
      key = {t.id}
      todo = {t}
      setTodos = {setToDos}
      checkFunction = {handelDoneCheck}
      deleteFunction={handleDeleteTask}
    />
  ));

  function addTask() {
    if (!newTaskInput.trim()) return;
    const updatedTodos = [
      ...todos,
      {
        id: uuidv4(),
        title: newTaskInput,
        isDone: false,
      },
    ]

    setToDos(updatedTodos);

    localStorage.setItem("todos",JSON.stringify(updatedTodos))
    setnewTaskInput("");
  }

  function handleDeleteTask(selectedTask) {
    const updatedTodos = todos.filter((task) => {
        return selectedTask !== task.id
      })
    setToDos(updatedTodos)
    localStorage.setItem("todos",JSON.stringify(updatedTodos))
  }

  return (
    <>
      <Container className="todo-layout" maxWidth="md" sx={{ mt: 2, }}>
        <Card>
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Typography
                fontFamily={"BBH Hegarty"}
                fontWeight={"100"}
                color="primary"
                className="todo-title"
                variant="h3"
                sx={{
                  p: 1,
                  mb: 1,
                  pl: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
                textAlign={"center"}
              >
                My Tasks
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  label="New Task"
                  variant="outlined"
                  value={newTaskInput}
                  onChange={(e) => setnewTaskInput(e.target.value)}
                />
                <AddButton addFunction={addTask} />
              </div>
            </div>

            <Divider />
            <ToggleButtonGroup
            className="todo-filters"
              color="primary"
              value={displayedTodos}
              exclusive
              onChange={changeDisplayedTodos}
              aria-label="classification"
              sx={{ p: 2, mb: 1}}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ToggleButton value="undone">Undone</ToggleButton>
              <ToggleButton value="done">done</ToggleButton>
              <ToggleButton value="All">All</ToggleButton>
            </ToggleButtonGroup>
            {todos.length > 0 ? todo : <EmptyList />}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
