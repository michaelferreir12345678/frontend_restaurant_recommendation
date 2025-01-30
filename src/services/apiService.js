const API_BASE_URL = "http://localhost:5000";

export const fetchRestaurants = async () => {
  const response = await fetch(`${API_BASE_URL}/restaurants`);
  return response.json();
};

export const addRestaurant = async (restaurant) => {
  const response = await fetch(`${API_BASE_URL}/restaurants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(restaurant),
  });
  return response.json();
};

export const deleteRestaurant = async (id) => {
  const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir o restaurante.");
  }

  return response.json();
};

export const updateRestaurant = async (id, restaurantData) => {
  const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(restaurantData),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar o restaurante.");
  }

  return response.json();
};
