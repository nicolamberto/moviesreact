import { Box, Button, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const MovieInfo = ({movie}) => {
  
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])


  return (

    <>
    {
      loading 
      ? 
        <CircularProgress/> 
      :
        <Box sx={{
          display:'flex',
          justifyContent:'space-around',
          alignItems:'center',
          background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path});`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          width:'100%',
          height:500
        }}>
          <img style={{width:'300px', height:'auto', }}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
          />
          <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            flexDirection:'column',
            width:'60%',
            p:'20px 20px 20px 20px',
            gap:5
          }}>
            <Typography variant='h2'>{movie.title}</Typography>
            <Typography>{movie.overview}</Typography>
            <Link to={'/'}><Button color='inherit'>Back</Button></Link>
          </Box>
      
        </Box>
    }
    </>
    
    
    
    
  )
}

export default MovieInfo
