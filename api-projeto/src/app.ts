import express from "express";
import userRoutes from "./routes";

const app = express();
app.use(express.json());

app.use("/registers", userRoutes);

app.listen(4000, () => {
  console.log("Servidor executando");
});
