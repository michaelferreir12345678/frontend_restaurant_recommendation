// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul padrão do Material-UI
      light: "#42a5f5", // Tom mais claro
      dark: "#1565c0", // Tom mais escuro
    },
    secondary: {
      main: "#9c27b0", // Roxo padrão do Material-UI
      light: "#ba68c8", // Tom mais claro
      dark: "#7b1fa2", // Tom mais escuro
    },
    error: {
      main: "#d32f2f", // Vermelho para erros
    },
    warning: {
      main: "#ed6c02", // Laranja para avisos
    },
    info: {
      main: "#0288d1", // Azul para informações
    },
    success: {
      main: "#2e7d32", // Verde para sucesso
    },
    background: {
      default: "#f5f5f5", // Cor de fundo padrão
      paper: "#ffffff", // Cor de fundo para componentes como cards
    },
    text: {
      primary: "#212121", // Cor do texto principal
      secondary: "#757575", // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Fonte personalizada
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none", // Remove a transformação de texto em botões
    },
  },
  spacing: 8, // Espaçamento padrão (8px)
  shape: {
    borderRadius: 8, // Bordas arredondadas padrão
  },
});

export default theme;