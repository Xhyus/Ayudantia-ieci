import React from 'react'
import { Input, FormControl, FormLabel } from '@chakra-ui/react'

const InputForm = ({ label, handleChange, name, placeholder, type, value }) => {
    return (
        <FormControl id={name}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} placeholder={placeholder} name={name} onChange={handleChange} value={value} />
        </FormControl>
    )
}

export default InputForm