import { useState } from 'react'
import { getProduct } from '../../../data/products'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
    try {
        const response = await getProduct(context.query.producto, localStorage.getItem('token'))
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/",
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/",
            }
        }
    }

}

const editar = ({ data }) => {
    const [product] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Producto: {product.name}</Heading>
            <Stack my={10}>
                <ShowInfo value={product.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={product.description} color={"blue.300"} tag={"Descripción"} />
                <HStack>
                    <ShowInfo value={product.price} color={"orange.300"} tag={"Precio"} />
                    <ShowInfo value={product.quantity} color={"red.300"} tag={"Stock"} />
                </HStack>
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar