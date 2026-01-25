import { NavLink, Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  AppBar,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";

export default function NavBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        top: 0,
      }}
    >
      {/* Full Width Container */}
      <Container maxWidth={false} disableGutters sx={{display:"flex",justifyContent:"space-around"}}>

          {/* Logo */}
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
                fontSize:{
                  xs:"1rem",
                  sm:"2rem",
                  md:"2.2rem"
                }
              }}
            >
              TaskLoop
            </Typography>
          </Link>

          {/* Nav Links */}
          <Stack direction="row" spacing={1}>
            {[
              { name: "Home", path: "/" },
              { name: "Tasks", path: "/todolist" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <Button
                key={link.name}
                component={NavLink}
                to={link.path}
                sx={{
                  color: "#64748b",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 2,
                  textTransform: "none",
                  "&.active": {
                    color: "#6366f1",
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
      </Container>
    </AppBar>
  );
}
