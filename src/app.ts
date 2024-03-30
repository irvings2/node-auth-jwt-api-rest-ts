import "dotenv/config";
import express from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

//Routes
app.use("/auth", authRoutes);
//Autenticacion
app.use("/users", userRoutes);
//User

export default app;
