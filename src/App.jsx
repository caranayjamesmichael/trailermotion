import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import TopRated from "./pages/TopRated";
import Trailer from "./pages/Trailer";
import Genre from "./pages/Genre";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route path="/genres" element={<Genre />}></Route>
          <Route path="/trailer" element={<Trailer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
