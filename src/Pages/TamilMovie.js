import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres";
import useGenre from "../useGenre";

const TamilMovie = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchMoviesInTamilLanguage = async () => {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ta&region=IN&with_original_language=ta&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
  };
  useEffect(()=>{
    fetchMoviesInTamilLanguage();
  },[page,genreforURL])
  

  
  return (
    <div>
    <span className="pageTitle">Tamil Movies</span>
    <Genres
      type="movie"
      genres={genres}
      setGenres={setGenres}
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      setPage={setPage}
    />
    <div className="trending">
      {content &&
        content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type="movie"
            vote_average={c.vote_average}
          />
        ))}
    </div>
    {numOfPages > 1 && (
      <CustomPagination setPage={setPage} numOfPages={100} />
    )}
  </div>
);
};

export default TamilMovie