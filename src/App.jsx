import { useState, useEffect } from "react"
import Header from "./components/Header"
import Baner from "./components/Banner"
import MovieList from "./components/MovieList"

function App() {
  
  //setter cho biến movies [] là kiểu mảng rỗng
  const [movies, setMovies] = useState( [] );
  const [moviesRate, setMoviesRate] = useState( [] );
  
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

      const [res1, res2] =  await Promise.all([fetch(url_1, options), fetch(url_2, options)]);

      const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

      setMovies(data1.results);
      setMoviesRate(data2.results);
    }
    fetchMovies();
    console.log(movies);
  } , []);

  return (
    <>
      <div className="bg-black">
        <Header/>
        <Baner/>
        <MovieList title={'Hot Movie'} data={movies}/>
        <MovieList title={'Top Rated'} data={moviesRate.slice(0,6)}/>
        
      </div>
    </>
  )
}

export default App
