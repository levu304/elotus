import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesPage from "./pages/Movies";
import MovieDetailPage from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies">
          <Route index element={<MoviesPage />} />
          <Route path=":movieId" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
