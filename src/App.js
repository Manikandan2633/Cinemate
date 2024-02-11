import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Route, Routes } from "react-router-dom/dist";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";
import TamilMovie from "./Pages/TamilMovie";



function App() {
  return (
    <>
    <Header />

      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending/> } index />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />}  />
            <Route path="/tamil" element={<TamilMovie />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>

      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
