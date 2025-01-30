// src/App.js
import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { SearchProvider } from "./context/SearchContext"; // Importe o SearchProvider

function App() {
  return (
    <>
      <CssBaseline />
      <SearchProvider> {/* Envolva o conteúdo com o SearchProvider */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
            <HomePage />
          </Container>
          <Footer />
        </Box>
      </SearchProvider>
    </>
  );
}

export default App;