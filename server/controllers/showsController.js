import showsData from "../models/shows.json" assert { type: "json" };

const getAllShows = (req, res) => {
  try {
    res.json(showsData.shows);
    console.log(`All shows has been requested!`);
  } catch (error) {
    console.error(error);
  }
};

const getShowByID = (req, res) => {
  const showID = Number(req.params.id);

  const filteredShows = showsData.shows.find((show) => show.id === showID);

  res.json(filteredShows);
};

const getShowByGenre = (req, res) => {
  const showGenre = req.params.genre;

  const filteredShows = showsData.shows.filter(
    (show) => show.genre === showGenre
  );
  res.json(filteredShows);
  console.log(`${showGenre} shows has been requested`);
};

const getShowByType = (req, res) => {
  const showType = req.params.type;

  const filteredShows = showsData.shows.filter(
    (show) => show.type === showType
  );
  res.json(filteredShows);
  console.log(`${showType} shows has been requested!`);
};

const getShowByTopRatings = (req, res) => {
  const filteredShows = showsData.shows.filter((show) => show.ratings >= 4);
  res.json(filteredShows);
};

export {
  getAllShows,
  getShowByID,
  getShowByGenre,
  getShowByType,
  getShowByTopRatings,
};
