import api from "./api";

export const getAllReviews = async () => {
  try {
    const res = await api.get("/api/reviews");
    return res.data.reviews;
  } catch (error) {
    return error.message;
  }
};

export const getReviewByProductId = async (productId) => {
  try {
    const res = await api.get(`/api/reviews/${productId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const createReview = async (review) => {
  try {
    const res = await api.post("/api/reviews", review);
    return res.data;
  } catch (error) {
    return error.message;
  }
};
