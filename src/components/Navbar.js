import { Flex, Heading, Input, Spacer, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ColorSwitch from './ColorSwitch'

const Navbar = () => {
  const inputbg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex p={1} gap={5} pos='fixed' zIndex='10' w='100%' h='40px'>
        <Heading size='lg'>GameApp</Heading>
        <Spacer/>
        <Input bg={inputbg} placeholder='search here' size='md' />
        <Spacer/>
        <ColorSwitch />
    </Flex>
  )
}

export default Navbar