// src/components/Header.js
import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { SearchContext } from "../context/SearchContext"; // Importe o contexto

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: 1,
  marginLeft: theme.spacing(1),
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const { searchValue, setSearchValue } = useContext(SearchContext); // Consuma o contexto
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchValue(""); // Limpa o campo de pesquisa quando o search é fechado
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Atualiza o valor da pesquisa no contexto
  };

  return (
    <AppBar
      position="static"
      sx={{
        mb: 4,
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      }}
    >
      <Toolbar>
        {!showSearch && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {!showSearch && (
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            M&L
          </Typography>
        )}

        {showSearch ? (
          <Search>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <IconButton color="inherit" onClick={toggleSearch}>
              <CloseIcon />
            </IconButton>
          </Search>
        ) : (
          <IconButton color="inherit" onClick={toggleSearch}>
            <SearchIcon />
          </IconButton>
        )}

        {!showSearch && (
          <>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <NotificationsIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="User Avatar" src="https://via.placeholder.com/40" sx={{ width: 40, height: 40 }} />
            </IconButton>
          </>
        )}
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;