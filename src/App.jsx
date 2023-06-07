import { useState, Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
const MovieInfo = lazy(()=> import('./components/MovieInfo'));
const Fetch = lazy(()=> import('./components/Fetch'));


function App() {

    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState('');
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
          <Route path={'/'} element={<Fetch movies={movies} setMovies={setMovies} movie={movie} setMovie={setMovie} searchKey={searchKey} setSearchKey={setSearchKey}/>}/>
          <Route path={`/onlymovie`} element={<MovieInfo movie={movie}/>}/>
        </Routes>
      } 
      </BrowserRouter>
    </Suspense>
    
  )
}

export default App
