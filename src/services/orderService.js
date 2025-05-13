import api from "./api";

export const createOrder = async (orderData) => {
  try {
    const res = await api.post("/api/orders", orderData);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserOrders = async () => {
  try {
    const res = await api.get("/api/orders");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getOrderById = async (id) => {
  try {
    const res = await api.get(`/api/orders/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw error;
  }
};

export const updatePaymentSlip = async (orderId, paymentSlipLink) => {
  try {
    const res = await api.put(`/api/orders/${orderId}`, {
      paymentSlipLink,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

