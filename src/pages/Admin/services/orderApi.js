import api from "../../../services/api.js";

export const getAllOrders = async () => {
  try {
    const response = await api.get("/admin/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await api.put(`/admin/orders/${orderId}`, {
      stateVariant: status,
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error updating order ${orderId} status:`, error);
    throw error;
  }
};
