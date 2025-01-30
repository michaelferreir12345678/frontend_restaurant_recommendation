import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Chip,
  Box,
  Menu,
  MenuItem,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deleteRestaurant, updateRestaurant } from "../services/apiService";

const RestaurantCard = ({ restaurant, onDelete, onUpdate }) => {
  const [favorite, setFavorite] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [updatedRating, setUpdatedRating] = useState(restaurant.rating);
  const [updatedComment, setUpdatedComment] = useState(restaurant.comment);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      await deleteRestaurant(restaurant.id);
      if (onDelete) {
        onDelete(restaurant.id);
      }
    } catch (error) {
      console.error("Erro ao excluir restaurante:", error);
    }
    handleMenuClose();
  };
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEditOpen = () => {
    setEditModalOpen(true);
    handleMenuClose();
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      await updateRestaurant(restaurant.id, {
        rating: updatedRating,
        comment: updatedComment,
      });
      onUpdate(restaurant.id, { rating: updatedRating, comment: updatedComment });
      setEditModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar restaurante:", error);
    }
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 }}}>
      <CardMedia component="img" height="200" image={restaurant.image || "https://via.placeholder.com/400x200"} alt={restaurant.name} />
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>{restaurant.name}</Typography>
          <IconButton onClick={handleMenuOpen}><MoreVertIcon /></IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">{restaurant.address}</Typography>
        <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1 }}>
          <Chip icon={<StarIcon sx={{ color: "#FFD700" }} />} label={restaurant.rating} size="small" />
          <Chip icon={<CalendarTodayIcon />} label={restaurant.visitDate || "Data não informada"} size="small" />
        </Box>
        <IconButton onClick={() => setFavorite(!favorite)} sx={{ mt: 1, color: favorite ? "#FF5252" : "#BDBDBD" }}>
          <FavoriteIcon />
        </IconButton>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleExpandClick} sx={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "#fafafa", borderTop: "1px solid #e0e0e0" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>Comentário:</Typography>
          <Typography variant="body2" color="textSecondary">{restaurant.comment || "Nenhum comentário adicionado."}</Typography>
        </CardContent>
      </Collapse>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditOpen}>Editar</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: "#FF5252" }}>Excluir</MenuItem>
      </Menu>
      <Dialog open={editModalOpen} onClose={handleEditClose}>
        <DialogTitle>Editar Avaliação</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Nota" type="number" value={updatedRating} onChange={(e) => setUpdatedRating(e.target.value)} sx={{ mb: 2 }} />
          <TextField fullWidth label="Comentário" multiline rows={3} value={updatedComment} onChange={(e) => setUpdatedComment(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">Cancelar</Button>
          <Button onClick={handleUpdate} color="primary" variant="contained">Salvar</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default RestaurantCard;
