import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface SnackBarMessageProps {
  message: string;
  onClose: () => void; // Change the type of onClose to a function that takes no arguments
  severity: "success" | "error" | "info" | "warning";
  open: boolean;
}

const SnackBarMessage: React.FC<SnackBarMessageProps> = ({
  open,
  message,
  severity,
  onClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarMessage;
