import adminApi from "./adminApi";

export const getAllOrders = async () => {
  try {
    const response = await adminApi.get("/admin/orders");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await adminApi.put(`/admin/orders/${orderId}`, { status });
    return response.data;
  } catch (error) {
    console.error(`Error updating order ${orderId} status:`, error);
    throw error;
  }
};
