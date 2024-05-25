// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 12, // Set the border radius to 12px for all components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Ensure buttons have the same border radius
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Ensure cards have the same border radius
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12, // Ensure text fields have the same border radius
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Ensure papers have the same border radius
        },
      },
    },
  },
});

export default theme;
