export const darkTheme = {
  palette: {
    primary: { main: "#0C66D5" },
    secondary: { main: "#6EA8FF" },
    background: { default: "#0F1218", paper: "#181C23" },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#141923',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1B2230',
        }
      }
    }
  },
};