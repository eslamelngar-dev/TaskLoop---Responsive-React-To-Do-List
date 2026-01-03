import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

export default function ActionButtons({
  todo,
  handelDoneClick,
  handelDeleteClick,
  isEditing,
  setIsEditing,
  handelSaveClick,
}) {
  
  function handleEditClick() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  return (
    <Grid item xs={4} display="flex" justifyContent="flex-end" gap={1}>
      {!isEditing &&(
        <IconButton
        sx={{
          backgroundColor: todo.isDone ? "grey" : "#21c921",
          color: "white",
        }}
        className={`IconButtons check-IconButtons ${todo.isDone ? "done" : ""}`}
        onClick={handelDoneClick}
      >
        <CheckIcon />
      </IconButton>
      )}

      <IconButton
        sx={{
          backgroundColor: "rgb(20, 173, 244)",
          color: "white",
        }}
        className="IconButtons edit-IconButtons"
        onClick={isEditing ? handelSaveClick : handleEditClick}
      >
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </IconButton>

      <IconButton
        sx={{ backgroundColor: "#e53935", color: "white" }}
        className="IconButtons delete-IconButtons"
        onClick={handelDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
}
