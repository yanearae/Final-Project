import { Router } from "express";
import { createPost, deletePost, getPost, updatePost } from "../../controllers/postControllers";


const postRoutes = Router()

postRoutes.get("/", getPost);

postRoutes.post("/", createPost);

postRoutes.patch("/:postId", updatePost);

postRoutes.delete("/:postId", deletePost);

export default postRoutes