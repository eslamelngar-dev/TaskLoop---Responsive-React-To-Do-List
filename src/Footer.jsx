import { Box, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: "auto",
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            © {new Date().getFullYear()} TaskLoop. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              to="*"
              color="text.secondary"
              style={{textDecoration: "none",color: "#6366f1"}}
            >
              Privacy Policy
            </Link>
            <Link
              to="*"
              textDecoration="none"
              color="text.secondary"
              style={{textDecoration: "none",color: "#6366f1"}}
            >
              Terms of Service
            </Link>
            <Link
              to="https://github.com/eslamelngar-dev"
              target="_blank"
              color="text.secondary"
              style={{textDecoration: "none",color: "#6366f1"}}
            >
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
