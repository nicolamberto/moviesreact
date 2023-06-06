import React, { useEffect, useState, Suspense, lazy} from 'react'
const DiscoverContainer = lazy(()=> import('./DiscoverContainer'))
const SearchBar = lazy(()=> import('./SearchBar'))
const PaginationSize = lazy(()=> import('./Pagination'))
/* import DiscoverContainer from './DiscoverContainer';
import SearchBar from './SearchBar';
import PaginationSize from './Pagination'; */



const Fetch = ({movies, setMovies, movie, setMovie, searchKey, setSearchKey, trailer, setTrailer}) => {
console.log(movies);
    const [page, setPage] = useState(1)
    

    const API_KEY='b8222ea910e838087b6c03ba0ee07cc3';
    const URL_API='https://api.themoviedb.org/3'
    const IMAGE_PATH= 'https://image.tmbd.org/t/p/original'

    useEffect(()=>{
          fetching()
    },[])
    
    const type = searchKey ? 'search' : 'discover'

    const fetching = async()=>{
      const response = await fetch(`${URL_API}/${type}/movie?include_adult=false&include_video=true&page=${page}&api_key=${API_KEY}&query=${searchKey}`)
        await response.json().then((data)=>{
          setMovie(data.results[0]);
          setMovies(data.results);
        })
    }

                    //FETCHING A UNA SOLA PELICULA

    const fetchingMovie = async(id)=>{
      const response = await fetch(`${URL_API}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
        await response.json().then((data)=>{
          if(data.videos && data.videos.results){
            const trailer = data.videos.results.find(
              (vid)=> vid.name === 'Official Trailer'
              );
            setTrailer(trailer ? trailer : data.videos.results[0])
            
          }
          setMovie(data)
        })
    }


    const selectMovie = async (movie) => {
      fetchingMovie(movie.id)
      setMovie(movie)
    }
    
    

  return (
    <Suspense>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} fetching={fetching}/>
      <DiscoverContainer setMovie={setMovie} fetchingMovie={fetchingMovie} selectMovie={selectMovie} movie={movie} movies={movies}/>
      <PaginationSize movie={movie} page={page} setPage={setPage} fetching={fetching}/>
    </Suspense>
    
  )
}

export default Fetch;
