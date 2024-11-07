import { Router } from "express";

const messageRoutes = Router()

messageRoutes.get("/messages");

messageRoutes.post("/messages");