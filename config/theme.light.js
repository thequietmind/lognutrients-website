export const lightTheme = {
  palette: {
    primary: { main: "#0C66D5" },
    secondary: { main: "#5A8DEE" },
    background: { default: "#F5F7FB", paper: "#FFFFFF" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#EEF2F8',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0C66D5',
        }
      }
    }
  },
};