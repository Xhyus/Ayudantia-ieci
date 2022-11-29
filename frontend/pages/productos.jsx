import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getProducts } from '../data/products'
import { useRouter } from 'next/router'

const productos = () => {

    const [products, setProducts] = useState([{
        id: '',
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: ''
    }])
    const router = useRouter()

    const contentTable = () => {
        return products.map(product => {
            return (
                <Tr key={product._id}>
                    <Td>{product.name}</Td>
                    <Td>{product.description}</Td>
                    <Td>{product.price}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./product/ver/${product._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./product/actualizar/${product._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de productos </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('./productos')}>Agregar producto</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Descripción</Td>
                                <Td>Precio</Td>
                                <Td>Acciones</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </>

    )
}

export default productos