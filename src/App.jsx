import { useState, Suspense, lazy, useEffect } from 'react';
import './App.css';
const Fetch = lazy(()=> import('./components/Fetch'))
/* import Fetch from './components/Fetch'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
/* import MovieInfo from './components/MovieInfo'; */
const MovieInfo = lazy(()=> import('./components/MovieInfo'))



function App() {

    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({title : 'Loading movies.'});
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 500);
    },[])


  return (
    <Suspense>
      <BrowserRouter>
      {
        loading ? 
        <CircularProgress />
        :
        <Routes>
          <Route path={'/'} element={<Fetch movies={movies} setMovies={setMovies} movie={movie} setMovie={setMovie} searchKey={searchKey} setSearchKey={setSearchKey} trailer={trailer} setTrailer={setTrailer} />}/>
          <Route path={`/onlymovie`} element={<MovieInfo movie={movie}/>}/>
        </Routes>
      } 
      </BrowserRouter>
    </Suspense>
    
  )
}

export default App
