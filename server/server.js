import express from "express";
import showsRoutes from "./routes/showsRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", showsRoutes)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
