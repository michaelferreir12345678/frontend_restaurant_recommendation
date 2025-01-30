// src/pages/HomePage.js
import React, { useEffect, useContext, useState } from "react";
import { Container, Grid, Fab, CircularProgress, Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RestaurantCard from "../components/RestaurantCard";
import { fetchRestaurants } from "../services/apiService";
import { RestaurantContext } from "../context/RestaurantContext";
import { SearchContext } from "../context/SearchContext"; // Importe o contexto
import RestaurantForm from "../components/RestaurantForm";

const HomePage = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const { searchValue } = useContext(SearchContext); // Consuma o contexto
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRestaurants = async () => {
      setIsLoading(true);
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        setError("Erro ao carregar restaurantes.");
      } finally {
        setIsLoading(false);
      }
    };
    loadRestaurants();
  }, [setRestaurants]);

  const handleDeleteRestaurant = (id) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.filter((restaurant) => restaurant.id !== id)
    );
  };

  // Filtra os restaurantes com base no valor da pesquisa
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {filteredRestaurants
            .sort((a, b) => b.rating - a.rating)
            .map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                <RestaurantCard
                  restaurant={restaurant}
                  onDelete={handleDeleteRestaurant}
                />
              </Grid>
            ))}
        </Grid>
      )}
      <Fab
        color="primary"
        style={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <RestaurantForm open={open} handleClose={() => setOpen(false)} />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
    </Container>
  );
};

export default HomePage;