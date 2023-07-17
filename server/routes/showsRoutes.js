import express from "express";
import {
  getAllShows,
  getShowByID,
  getShowByGenre,
  getShowByType,
} from "../controllers/showsController.js";

const showsRoutes = express.Router();

showsRoutes.get("/shows", getAllShows);
showsRoutes.get("/shows/:id", getShowByID);
showsRoutes.get("/shows/genre/:genre", getShowByGenre);
showsRoutes.get("/shows/type/:type", getShowByType);

export default showsRoutes;
