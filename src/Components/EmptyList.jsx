import { Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "aos/dist/aos.css";

export default function EmptyList() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.45,
            ease: "easeOut",
            delay: 0.1,
            mass: 5,
          }}
        >
          <AssignmentIcon
            sx={{
              fontSize: 80,
              color: "primary.main",
              opacity: 1,
            }}
          />
        </motion.div>
        <Typography
          variant="h5"
          fontFamily="cairo"
          color="text.primary"
          fontWeight={600}
          sx={{ mb: 1 }}
        >
          No tasks yet!
        </Typography>
        <Typography
          variant="body1"
          fontFamily="cairo"
          color="text.secondary"
          textAlign="center"
          sx={{ maxWidth: "400px" }}
        >
          You're all caught up! Add a new task above to get started.
        </Typography>
      </div>
    </>
  );
}
