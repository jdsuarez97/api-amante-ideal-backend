import express from "express";
import cors from "cors";
import amanteRoutes from "./routes/amante.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API Amante Ideal backend"
  });
});

app.use("/amantes", amanteRoutes);

app.use((req, res) => {
  return res.status(404).json({
    message: "Route not found"
  });
});

export default app;
