import api from "../../../services/api";

export const getAllProducts = async () => {
  const res = await api.get("/admin/products");
  return res.data.products;
};

export const addProduct = async (productData) => {
  const res = await api.post("/admin/products", productData);
  return res.data.product;
};

export const updateProduct = async (productId, productData) => {
  const res = await api.put(`/admin/products/${productId}`, productData);
  return res.data.product;
};

export const deleteProduct = async (productId) => {
  await api.delete(`/admin/products/${productId}`);
  return true;
};
