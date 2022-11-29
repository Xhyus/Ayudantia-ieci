import React from 'react'
import { HStack, Text } from '@chakra-ui/react'


const ShowInfo = ({ value, color, tag }) => {
    return (
        <HStack>
            <Text fontWeight={"bold"} color={color}>{tag}: </Text>
            <Text>{value}</Text>
        </HStack>
    )
}

export default ShowInfo