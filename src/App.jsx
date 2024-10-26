import { useState, useEffect } from "react"
import Header from "./components/Header"
import Baner from "./components/Banner"
import MovieList from "./components/MovieList"
import MovieSearch from "./components/MovieSearch";



function App() {

  //setter cho biến movies [] là kiểu mảng rỗng
  const [movies, setMovies] = useState([]);
  const [moviesRate, setMoviesRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setMovieSearch(data.results);
    } catch (error) {

    }
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const url_1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

      const url_2 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

      // const response = await fetch(url, options);

      // const data = await response.json();

      const [res1, res2] = await Promise.all([fetch(url_1, options), fetch(url_2, options)]);

      const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

      setMovies(data1.results);
      setMoviesRate(data2.results);
    }
    fetchMovies();
    console.log(movies);
  }, []);

  return (
    <>
      <div className="bg-black">
        <Header onSearch={handleSearch} />
        <Baner />
        {movieSearch.length > 0 ?  <MovieSearch title = {'Search result'} data = {movieSearch} /> : (
          <>
            <MovieList title={'Hot Movie'} data={movies} />
            <MovieList title={'Top Rated'} data={moviesRate} />
          </>
        )
        }

        
      </div>
    </>
  )
}

export default App
