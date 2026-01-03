import { Link } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box className="home-container">
      <Container maxWidth="sm">
        <Typography variant="h2" className="home-title">
          Organize Your Life
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
          Our modern To-Do List app helps you stay on top of your goals with a
          clean, intuitive interface.
        </Typography>
        <Link to="/todolist" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large" className="add-btn">
            Get Started Free
          </Button>
        </Link>
      </Container>
    </Box>
  );
}