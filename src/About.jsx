import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";

export default function About() {
  const features = [
    {
      title: "Efficient Management",
      description:
        "Organize your daily tasks easily with our intuitive drag-and-drop feel and clean UI.",
      icon: <ChecklistIcon sx={{ fontSize: 40, color: "#6366f1" }} />,
    },
    {
      title: "Fast & Responsive",
      description:
        "Built with the latest technologies like React and MUI for a lightning-fast experience.",
      icon: <SpeedIcon sx={{ fontSize: 40, color: "#6366f1" }} />,
    },
    {
      title: "Cross-Platform",
      description:
        "Access your tasks from any device. Our platform is fully responsive and mobile-friendly.",
      icon: <DevicesIcon sx={{ fontSize: 40, color: "#6366f1" }} />,
    },
      ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 2, color: "white" }}
        >
          About TaskLoop
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.8 }}
        >
          TaskLoop is more than just a to-do list. It's a modern productivity
          tool designed to help you clear your mind and focus on what truly
          matters.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 320,
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-10px)" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: 260,
                  p: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 3,
                    bgcolor: "rgba(99, 102, 241, 0.08)",
                  }}
                >
                  {feature.icon}
                </Avatar>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {feature.title}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
