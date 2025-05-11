import api from "../../../services/api";

export const getAllProducts = async () => {
  console.log("Fetching products...");
  const res = await api.get("/admin/products");
  console.log(res.data.products);
  return res.data.products;
};

export const getProductById = async (productId) => {
  // Placeholder: Replace with actual API call
  console.log(`Fetching product with ID: ${productId}`);
  // const response = await axios.get(`${API_URL}/${productId}`);
  // return response.data;
  return null; // Return null for now
};

export const addProduct = async (productData) => {
  // Placeholder: Replace with actual API call
  console.log("Adding product:", productData);
  // const response = await axios.post(API_URL, productData);
  // return response.data;
  return { ...productData, productId: Date.now() }; // Mock response
};


export const updateProduct = async (productId, productData) => {
  // Placeholder: Replace with actual API call
  console.log(`Updating product with ID: ${productId}`, productData);
  // const response = await axios.put(`${API_URL}/${productId}`, productData);
  // return response.data;
  return { ...productData, productId }; // Mock response
};


export const deleteProduct = async (productId) => {
  // Placeholder: Replace with actual API call
  console.log(`Deleting product with ID: ${productId}`);
  // await axios.delete(`${API_URL}/${productId}`);
  return true; // Mock successful deletion
};
