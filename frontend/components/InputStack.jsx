import React from 'react'
import { Button, Stack, Input } from '@chakra-ui/react'

const InputStack = ({ type, value, placeholder, consolemsg, imprimir }) => {
    return (
        <Stack spacing={3} w={"full"}>
            <Input placeholder={placeholder} type={type} onChange={imprimir} />
            {/* <Input placeholder={placeholder} /> */}
            {/* <Button colorScheme={'cyan'} onClick={() => imprimir(consolemsg)} size="sm">Submit</Button> */}
        </Stack>
    )
}

export default InputStack