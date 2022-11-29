import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import { createProduct } from '../data/products'
import InputForm from '../components/InputForm'
import TextareaInput from '../components/TextareaInput'
import { useRouter } from 'next/router'

const productos = () => {

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
        description: ''
    })
    const router = useRouter()

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })

    }

    const submitProduct = (e) => {
        e.preventDefault()
        createProduct(product).then(res => {
            console.log(res.data.name)
        })
    }

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Producto</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del producto" type="text" value={product.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del producto" type="number" value={product.price} />
                    <InputForm label="Cantidad" handleChange={handleChange} name="quantity" placeholder="Cantidad del producto" type="number" value={product.quantity} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del producto" value={product.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitProduct}>Crear</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default productos