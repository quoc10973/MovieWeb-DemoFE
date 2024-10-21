import { useState, useEffect } from "react"
import Header from "./components/Header"
import Baner from "./components/Banner"
import MovieList from "./components/MovieList"

function App() {
  
  //setter cho biến movies [] là kiểu mảng rỗng
  const [movies, setMovies] = useState( [] );
  
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

      const response = await fetch(url, options);

      const data = await response.json();

      console.log(data);
    }
    fetchMovies();
  } , []);

  return (
    <>
      <div className="bg-black">
        <Header/>
        <Baner/>
        <MovieList title={'Hot Movie'}/>
        <MovieList title={'For You'}/>
        
      </div>
    </>
  )
}

export default App
