import { Router } from "express";
import * as adminController from "../controllers/adminController.js";

const adminRoutes = Router();

// Auth
adminRoutes.post("/auth/register", adminController.createNewAdmin);
adminRoutes.post("/auth/login", adminController.loginAdmin);

// Manage Products
adminRoutes.get("/products", adminController.getAllProducts);
adminRoutes.get("/products/:id", adminController.getProductById);
adminRoutes.post("/products", adminController.createNewProduct);
adminRoutes.put("/products/:id", adminController.updateProductById);
adminRoutes.delete("/products/:id", adminController.deleteProductById);

// Manage Orders
adminRoutes.get("/orders", adminController.getAllOrders);
adminRoutes.get("/orders/:id", adminController.getOrderById);
adminRoutes.put("/orders/:id", adminController.updateOrder);

// Manage users
adminRoutes.get("/users", adminController.getAllUsers);
adminRoutes.post("/users", adminController.createNewUser);
adminRoutes.put("/users/:id", adminController.updateUserById);
adminRoutes.delete("/users/:id", adminController.deleteUserById);

export default adminRoutes;
