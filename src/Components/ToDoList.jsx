import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useEffect, useState, useContext, useMemo, useReducer } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToDo from "./ToDo";
import AddButton from "./AddButton";
import TextField from "@mui/material/TextField";
import EmptyList from "./EmptyList";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SnackBarContext } from "../Contexts/SnackBarContext";
import TodosReducer from "../Reducers/TodosReducers";
import "../App.css";

export default function ToDoList() {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [displayedTodos, setdisplayedTodos] = useState("All");
  const [newTaskInput, setnewTaskInput] = useState("");
  const { showSnackBar } = useContext(SnackBarContext);

  const changeDisplayedTodos = (e, nextView) => {
    if (nextView !== null) {
      setdisplayedTodos(nextView);
    }
  };

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    dispatch({ type: "loaded", payload: storageTodos });
  }, []);

  const completedTodos = useMemo(() => todos.filter((t) => t.isDone), [todos]);

  const notCompletedTodos = useMemo(
    () => todos.filter((t) => !t.isDone),
    [todos],
  );

  let todosToBeRender = todos;
  if (displayedTodos === "done") todosToBeRender = completedTodos;
  else if (displayedTodos === "undone") todosToBeRender = notCompletedTodos;

  function addTask() {
    if (!newTaskInput.trim()) return;
    dispatch({ type: "added", payload: { title: newTaskInput } });
    setnewTaskInput("");
    showSnackBar("New task has been added");
  }

  function handelDoneCheck(todoID) {
    dispatch({ type: "checked", payload: todoID });
  }

  function handleDeleteTask(selectedTask) {
    dispatch({ type: "deleted", payload: selectedTask });
    showSnackBar("Task has been deleted");
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: { xs: 4, md: 8 },
        mb: { xs: 4, md: 8 },
        px: { xs: 1.5, sm: 2 },
      }}
    >
      <Card
        sx={{
          borderRadius: { xs: "16px", sm: "24px" },
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          {/* Header */}
          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#1e293b",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                },
              }}
            >
              My Tasks
            </Typography>

            {/* Input */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
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

          {/* Filters */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <ToggleButtonGroup
              value={displayedTodos}
              exclusive
              onChange={changeDisplayedTodos}
              size="small"
              sx={{
                flexWrap: "wrap",
              }}
            >
              <ToggleButton value="All">All</ToggleButton>
              <ToggleButton value="undone">Pending</ToggleButton>
              <ToggleButton value="done">Completed</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Tasks */}
          <Box sx={{ minHeight: { xs: "200px", sm: "300px" } }}>
            {todos.length > 0 ? (
              todosToBeRender
                .slice()
                .reverse()
                .map((t) => (
                  <ToDo
                    key={t.id}
                    todo={t}
                    checkFunction={handelDoneCheck}
                    deleteFunction={handleDeleteTask}
                    dispatch={dispatch}
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
