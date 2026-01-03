import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../App.css";
import DialogComponent from "./DialogComponent";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import TextField from "@mui/material/TextField";

export default function ToDo({
  todo,
  setTodos,
  checkFunction,
  deleteFunction,
}) {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  function handelDoneClick() {
    checkFunction(todo.id);
  }

  function handelEditClick(e) {
    setEditTitle(e.target.value);
  }

  function handleSaveEdit() {
    setTodos((prevTodos) =>
      prevTodos.map((prevT) =>
        prevT.id == todo.id ? { ...prevT, title: editTitle } : prevT
      )
    );
    setIsEditing(false);
  }

  function handelDeleteClick() {
    setOpen(true);
  }

  return (
    <>
      <DialogComponent
        open={open}
        setOpen={setOpen}
        todoID={todo.id}
        deleteFunction={deleteFunction}
      />

      <motion.div
        layout
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Container maxWidth="sm" sx={{ mb: 1 }}>
          <Card
            className="card"
            sx={{ minWidth: 275 }}
            style={{
              backgroundColor: todo.isDone
                ? "rgba(59, 178, 63, 0.08)"
                : "inherit",
              transition: "all 0.3s ease",
              borderLeft: "solid 4px",
              borderColor: todo.isDone
                ? "rgb(34, 197, 94)"
                : "rgba(33, 150, 246, 0.24)",
              boxShadow: todo.isDone
                ? "0 4px 12px rgba(76, 175, 80, 0.15)"
                : "0 4px 10px rgba(0, 0, 0, 0.08)",
            }}
          >
            <CardContent sx={{ pb: 0 }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item xs={8}>
                  {isEditing ? (
                    <TextField
                      id="standard-basic"
                      label="editing text"
                      variant="standard"
                      style={{ width: "230%" }}
                      value={editTitle}
                      onChange={handelEditClick}
                    />
                  ) : (
                    <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        "&::after": todo.isDone
                          ? {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: "50%",
                              width: "100%",
                              height: "2px",
                              backgroundColor: "#9e9e9e",
                              transform: "translateY(-50%)",
                            }
                          : {},
                      }}
                    >
                      <Typography
                        fontFamily="cairo"
                        variant="h5"
                        sx={{
                          color: todo.isDone ? "#9e9e9e" : "inherit",
                          opacity: todo.isDone ? 0.7 : 1,
                        }}
                      >
                        {todo.title}
                      </Typography>
                    </Box>
                  )}
                </Grid>
                <ActionButtons
                  todo={todo}
                  handelDoneClick={handelDoneClick}
                  handelDeleteClick={handelDeleteClick}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  handelSaveClick={handleSaveEdit}
                />
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </motion.div>
    </>
  );
}
