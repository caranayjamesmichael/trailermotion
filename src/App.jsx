import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import TopRated from "./pages/TopRated";
import Trailer from "./pages/Trailer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route exact path="/series" element={<Series />}></Route>
          <Route exact path="/toprated" element={<TopRated />}></Route>
          <Route exact path="/trailer" element={<Trailer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
