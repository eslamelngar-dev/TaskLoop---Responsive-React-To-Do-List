import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useEffect, useState, useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToDo from "./ToDo";
import AddButton from "./AddButton";
import { v4 as uuidv4 } from "uuid";
import TextField from "@mui/material/TextField";
import EmptyList from "./EmptyList";
import { todosContext } from "../Contexts/todosContext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "../App.css";

export default function ToDoList() {
  const { todos, setToDos } = useContext(todosContext);
  const [displayedTodos, setdisplayedTodos] = useState("All");
  const [newTaskInput, setnewTaskInput] = useState("");

  const changeDisplayedTodos = (e, nextView) => {
    if (nextView !== null) {
      setdisplayedTodos(nextView);
    }
  };

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setToDos(storageTodos);
  }, [setToDos]);

  const completedTodos = todos.filter((t) => t.isDone);
  const notCompletedTodos = todos.filter((t) => !t.isDone);

  let todosToBeRender = todos;
  if (displayedTodos === "done") {
    todosToBeRender = completedTodos;
  } else if (displayedTodos === "undone") {
    todosToBeRender = notCompletedTodos;
  }

  function handelDoneCheck(todoID) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todoID) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });
    setToDos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function addTask() {
    if (!newTaskInput.trim()) return;
    const updatedTodos = [
      ...todos,
      {
        id: uuidv4(),
        title: newTaskInput,
        isDone: false,
      },
    ];
    setToDos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setnewTaskInput("");
  }

  function handleDeleteTask(selectedTask) {
    const updatedTodos = todos.filter((task) => selectedTask !== task.id);
    setToDos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Card
        sx={{
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          overflow: "visible",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Header Section */}
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#1e293b",
                textAlign: "left",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              My Tasks
            </Typography>

            {/* Input Section */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                background: "#f8fafc",
                p: 1,
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
              }}
            >
              <TextField
                fullWidth
                placeholder="What needs to be done?"
                variant="standard"
                value={newTaskInput}
                onChange={(e) => setnewTaskInput(e.target.value)}
        
              />
              <AddButton addFunction={addTask} />
            </Box>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          {/* Filters Section */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <ToggleButtonGroup
              className="todo-filters"
              value={displayedTodos}
              exclusive
              onChange={changeDisplayedTodos}
              size="small"
            >
              <ToggleButton value="All">All</ToggleButton>
              <ToggleButton value="undone">Pending</ToggleButton>
              <ToggleButton value="done">Completed</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Tasks List */}
          <Box sx={{ minHeight: "300px" }}>
            {todos.length > 0 ? (
              todosToBeRender
                .slice()
                .reverse()
                .map((t) => (
                  <ToDo
                    key={t.id}
                    todo={t}
                    setTodos={setToDos}
                    checkFunction={handelDoneCheck}
                    deleteFunction={handleDeleteTask}
                  />
                ))
            ) : (
              <EmptyList />
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
