import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({addFunction}) {
  return (
    <>
      <Button 
      sx={{m:0,ml:1}}
      style={{ padding:"15px",}}
      variant="contained" 
      endIcon={<AddIcon />}
      onClick={addFunction}
      >
        Add
      </Button>
    </>
  );
}
