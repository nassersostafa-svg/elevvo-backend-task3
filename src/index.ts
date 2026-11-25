import express from "express";
import userRoutes from "./routes/userRoutes";
import { requestLogger } from "./middleware/logger";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(requestLogger);

app.use("/api/users", userRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});