import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 -3px 5px 2px rgba(255, 105, 135, .3)",
        color: "#fff",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        {/* Seção de links rápidos */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Links Rápidos
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="hover" display="block">
              Sobre Nós 
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Serviços
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contato
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Política de Privacidade   
            </Link>
          </Box>
        </Grid>

        {/* Seção de contato */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contato
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: luizamaria@amor.com
          </Typography>
          <Typography variant="body2" gutterBottom>
            Telefone: (85) 1234-5678
          </Typography>
          <Typography variant="body2" gutterBottom>
            Endereço: Rua teste, 123 - Fortaleza, CE
          </Typography>
        </Grid>

        {/* Seção de redes sociais */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Redes Sociais
          </Typography>
          <Box>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Seção de direitos autorais */}
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} M&L. Todos os direitos reservados.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;