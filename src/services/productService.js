import api from "./api.js";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/api/products");
    console.log(response.data.products);
    return response.data.products;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/api/products/${productId}`);
    return response.data;
  } catch (err) {
    console.error(`Error fetching product ${productId} status:`, err);
    throw err;
  }
};
