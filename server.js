//process.env.PORT || 3000;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import taskRouter from "./routes/tasks.js";
import authRouter from "./routes/auth.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is missing from .env -- the API cannot sign tokens.");
  process.exit(1);
}

const allowedOrigins = (process.env.CORS_ORIGIN || "")
.split(",")
.filter(Boolean);
app.use(cors({origin: allowedOrigins}));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", taskRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});