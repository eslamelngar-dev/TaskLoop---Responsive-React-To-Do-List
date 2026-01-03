import { NavLink, Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Stack,
  Box,
} from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        top: 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          {/* Logo Section */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <TaskAltIcon sx={{ color: "#6366f1", fontSize: 32 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: "#1e293b",
                letterSpacing: "-1px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              TaskLoop
            </Typography>
          </Link>

          {/* Navigation Links */}
          <Stack direction="row" spacing={1}>
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: "#64748b",
                fontWeight: 600,
                "&.active": {
                  color: "#6366f1",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                },
                borderRadius: "10px",
                px: 2,
              }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/todolist"
              sx={{
                color: "#64748b",
                fontWeight: 600,
                "&.active": {
                  color: "#6366f1",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                },
                borderRadius: "10px",
                px: 2,
              }}
            >
              Tasks
            </Button>
            <Button
              component={NavLink}
              to="/about"
              sx={{
                color: "#64748b",
                fontWeight: 600,
                "&.active": {
                  color: "#6366f1",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                },
                borderRadius: "10px",
                px: 2,
              }}
            >
              About
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
