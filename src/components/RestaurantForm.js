import React, { useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  Rating,
  Typography,
  Box,
} from "@mui/material";
import PlacesAutocomplete from "react-places-autocomplete";
import { addRestaurant } from "../services/apiService";
import { RestaurantContext } from "../context/RestaurantContext";

const getPlaceDetails = (placeId) => {
  return new Promise((resolve, reject) => {
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      reject(new Error("Google Maps API não carregou corretamente."));
      return;
    }

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        resolve(place);
      } else {
        reject(new Error("Erro ao buscar detalhes do lugar."));
      }
    });
  });
};

const RestaurantForm = ({ open, handleClose }) => {
  const { setRestaurants } = useContext(RestaurantContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5); // Valor padrão 5
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [visitDate, setVisitDate] = useState(new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
          setLocationDenied(true); // Usuário negou a localização
        }
      );
    } else {
      setLocationDenied(true); // Geolocalização não suportada
    }
  }, []);

  const handleSelect = async (address, placeId) => {
    setAddress(address);
    try {
      const placeDetails = await getPlaceDetails(placeId);
      setName(placeDetails.name);
      setImage(placeDetails.photos?.[0]?.getUrl({ maxWidth: 400 }) || "");
      setShowDetails(true);
    } catch (error) {
      console.error("Erro ao buscar detalhes do lugar:", error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const newRestaurant = { name, rating, image, address, visitDate, comment };
    try {
      const savedRestaurant = await addRestaurant(newRestaurant);
      setRestaurants((prev) => [...prev, savedRestaurant]);
      handleClose();
    } catch (error) {
      console.error("Erro ao adicionar restaurante:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
        Conte sua experiência
      </DialogTitle>
      <DialogContent>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          searchOptions={{
            location: userLocation ? new window.google.maps.LatLng(userLocation.lat, userLocation.lng) : null,
            radius: locationDenied ? undefined : 30000, // Remove o raio se a localização foi negada
            componentRestrictions: { country: "BR" },
          }}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <Box sx={{ mb: 3 }}>
              <TextField
                {...getInputProps({
                  placeholder: "Busque o restaurante...",
                  fullWidth: true,
                  margin: "dense",
                  variant: "outlined",
                })}
              />
              <Box sx={{ maxHeight: 150, overflowY: "auto", mt: 1 }}>
                {loading && <Typography>Carregando...</Typography>}
                {suggestions.map((suggestion) => (
                  <Box
                    {...getSuggestionItemProps(suggestion)}
                    key={suggestion.placeId}
                    sx={{
                      p: 1,
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                  >
                    {suggestion.description}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </PlacesAutocomplete>

        {showDetails && (
          <>
            <TextField
              fullWidth
              label="Nome do Restaurante"
              value={name}
              margin="dense"
              variant="outlined"
              InputProps={{ readOnly: true }}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Data da Visita"
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              margin="dense"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 3 }}
            />
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
                Avaliação
              </Typography>
              <Rating
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                size="large"
                sx={{ fontSize: "2.5rem" }}
              />
            </Box>
            <TextField
              fullWidth
              label="Comentários"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              margin="dense"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={isLoading || !showDetails}
        >
          {isLoading ? "Salvando..." : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RestaurantForm;