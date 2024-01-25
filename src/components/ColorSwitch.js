import { useColorMode, Text, HStack, Switch } from '@chakra-ui/react'
import React from 'react'


const ColorSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode();


    return (
        <HStack>
            <Switch
                colorScheme='green'
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <Text>{colorMode === 'dark' ? 'Light' : 'Dark'}</Text>
        </HStack>
    )
}

export default ColorSwitch