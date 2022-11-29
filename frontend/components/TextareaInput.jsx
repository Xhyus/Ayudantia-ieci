import React from 'react'
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'

const TextareaInput = ({ name, placeholder, handleChange, label, value }) => {
    return (
        <FormControl id={name}>
            <FormLabel>{label}</FormLabel>
            <Textarea placeholder={placeholder} name={name} onChange={handleChange} value={value} />
        </FormControl>
    )
}

export default TextareaInput