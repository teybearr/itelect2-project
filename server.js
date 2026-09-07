process.env.PORT || 3000;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";
import authRouter from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is missing from .env -- the API cannot sign tokens.");
  process.exit(1);
}

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", router);

app.use((err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({ error: err.errors.map((e) => e.message) });
  }

  // Session 9: two people can pass the "is this email taken" check in the same millisecond. The unique index in the database is what actually stops the second one, and the error it throws arrives here.
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({ error: "That email is already registered" });
  }

  console.error(err.message);
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});