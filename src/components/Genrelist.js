import { Box,  Heading, SimpleGrid,useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import apiService from '../services/api-service'
import GenreBar from './GenreBar'
const Genrelist = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const [genres,setGenres] = useState([])
  useEffect(() => {
    apiService.get('/genres')
    .then(res => {
      console.log(res)
      setGenres(res.data.results)
    })
    .catch(err => console.log(err))
  },[])


  return (
    <Box rounded='md' w='240px' marginTop='45px' bg={bg} padding={2}>
      <Heading size='sm'>Genres</Heading>
        <SimpleGrid spacing={3} p={2}>
          {genres.map((genre,i)=>(
            <GenreBar genre={genre}/>
          ))}
        </SimpleGrid>
    </Box>
  )
}

export default Genrelist