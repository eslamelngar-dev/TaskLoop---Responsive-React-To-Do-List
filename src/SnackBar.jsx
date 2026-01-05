import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBars({open,message}) {
  
  return (
    <div>
      <Snackbar open={open}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%',borderRadius:"9px" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
