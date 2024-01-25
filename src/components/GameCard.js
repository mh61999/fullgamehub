import React from 'react'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'

const GameCard = ({game}) => {
  return (
    <Card borderRadius={12} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <HStack height='80px'>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard