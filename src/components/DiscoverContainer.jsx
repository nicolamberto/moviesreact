import { Box, Skeleton, Typography } from '@mui/material';
import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import {motion} from 'framer-motion';

const DiscoverContainer = ({ movies, selectMovie}) => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    },[])

    useEffect(()=>{
        Aos.init();
    },[])

  return (
    
    <Box component={'div'}
        sx={{
            display:'grid', 
            gridTemplateColumns:'1fr 1fr 1fr 1fr',
            gap:7,
            mt:10,
            mb:10
        }}>
        {movies.map((movie) => (
            
                <Box component={motion.div} data-aos="zoom-in-up"  key={movie.id} onClick={()=> selectMovie(movie)} /* aqui va el onclick con la function de selectMovie */
                sx={{
                    width:200,
                    height:300,
                    cursor:'pointer'
                }}
                >
                    <Link to={`/onlymovie`}>
                        {loading ? <Skeleton variant="rectangular" width={200} height={300} /> :
                         <Box component={motion.img} initial={{opacity:0}} animate={{opacity:1}} whileHover={{ scale: 1.05 }} transition={{duration:0.2}} style={{width:'200px', height:'auto'}}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        />
                        }
                   
                    <Typography sx={{color:'black', fontSize:15}} variant='h6'>{loading ? <Skeleton/> : movie.title}</Typography>
                    </Link>
                    
                </Box>
            
                
        ))}
    </Box>
    
  )
}

export default DiscoverContainer
