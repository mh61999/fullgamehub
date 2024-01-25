import { Box, HStack, Heading,Image } from '@chakra-ui/react'
import React from 'react'

const GenreBar = ({genre}) => {
  return (
    <Box shadow='base' rounded='md'>
        <HStack>
            <Image rounded='md' boxSize='40px' src={genre.image_background}/>
            <Heading size='md'>{genre.name}</Heading>
        </HStack>
    </Box>
  )
}

export default GenreBar