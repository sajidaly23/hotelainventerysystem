import express from "express";
import inventoryRoutes from "./routes/inventryroute";
import { connectDB } from "./utils/connectedDB";

const app = express();

// DB connect
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/inventory", inventoryRoutes);

app.get("/", (req, res) => {
  res.send("Inventory System Backend Running");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
