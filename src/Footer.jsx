import { Box, Container, Typography, Link, Stack } from "@mui/material";

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
              href="#"
              underline="none"
              color="text.secondary"
              sx={{ "&:hover": { color: "#6366f1" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              color="text.secondary"
              sx={{ "&:hover": { color: "#6366f1" } }}
            >
              Terms of Service
            </Link>
            <Link
              href="https://github.com/eslamelngar-dev"
              target="_blank"
              underline="none"
              color="text.secondary"
              sx={{ "&:hover": { color: "#6366f1" } }}
            >
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
