import { Router } from "express";

const commentsRoutes = Router()

commentsRoutes.post("/post/:postId/comment");

commentsRoutes.delete("/comments/commentId");

commentsRoutes.patch("comments/:commentId");

