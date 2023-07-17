import shows from "../models/shows.js";

const getAllShows = (req, res) => {
  res.send(shows);
  console.log(`All shows has been requested!`);
};

const getShowByID = (req, res) => {
  const showID = Number(req.params.id);

  const filteredShow = shows.find((show) => show.id === showID);
  res.json(filteredShow);
  console.log(`${filteredShow.title} has been requested!`);
};

const getShowByGenre = (req, res) => {
  const showGenre = req.params.genre;

  const filteredShows = shows.filter((show) => show.genre === showGenre);
  res.json(filteredShows);
  console.log(`${showGenre} shows has been requested`);
};

const getShowByType = (req, res) => {
  const showType = req.params.type;

  const filteredShows = shows.filter((show) => show.type === showType);
  res.json(filteredShows);
  console.log(`${showType} shows has been requested!`);
};

export { getAllShows, getShowByID, getShowByGenre, getShowByType };
