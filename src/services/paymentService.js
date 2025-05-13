import api from "./api";

const sendImageUrl = async (orderId, url) => {
  try {
    const res = await api.put(`/api/orders/${orderId}`, {
      paymentSlipLink: url,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default sendImageUrl;
