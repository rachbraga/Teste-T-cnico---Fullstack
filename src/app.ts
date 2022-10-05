import express from "express";
import "express-async-errors";
import associateRoute from "./routes/associate.routes";
import userRoutes from "./routes/register.routes";
import sessionRoutes from "./routes/session.routes";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/registers", userRoutes);
app.use("/login", sessionRoutes);
app.use("/associate", associateRoute);

app.use(handleAppErrorMiddleware);

export default app;
