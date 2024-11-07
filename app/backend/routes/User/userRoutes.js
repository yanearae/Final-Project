import { Router } from "express";
import { getUsers, updateUser, deleteUser } from "../../controllers/userControllers.js";

const userRoutes = Router()

// userRoutes.get("/", getUsers);

userRoutes.get("/", getUsers);

userRoutes.patch("/:userId", updateUser);

userRoutes.delete("/:userId", deleteUser);


// Rutas de gestion de usuarios
// const adminRoutes = Router()

// adminRoutes.get("/admin/users");

// adminRoutes.patch("/admin/users/:userId");

// adminRoutes.delete("/admin/users/:usersId");

// adminRoutes.post("/admin/users/:userId/block");

// adminRoutes.patch("/admin/users/:usersId/role");

// //  Rutas de moderacion de publicaciones

// adminRoutes.get("/admin/posts");

// adminRoutes.delete("/delete/admin/:postsId");

// adminRoutes.get("/admin/posts/reports");

// // Rutas de subscripciones

// adminRoutes.get("/admin/subscription/:userId");

// adminRoutes.patch("/admin/subscription/:userId");

// // Rutas de transacciones


// adminRoutes.get("/admin/payments");

// adminRoutes.patch("/admin/payments/:paymentId");

// // Ruta de notificaciones

// adminRoutes.post("/admin/notifications");

// // Rutas de Analitica

// adminRoutes.get("/admin/reports");


export default userRoutes