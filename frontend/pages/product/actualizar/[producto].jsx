import { useState } from 'react'
import { getProduct, updateProduct } from '../../../data/products'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getProduct(context.query.producto)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [product, setProduct] = useState(data)
    const router = useRouter()
    const { producto } = router.query

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })

    }

    const submitProduct = async (e) => {
        e.preventDefault()
        const response = await updateProduct(producto, product)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Producto actualizado',
                showConfirmButton: true,
                text: 'El producto se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el producto'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar Producto: {product.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del producto" type="text" value={product.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del producto" type="number" value={product.price} />
                    <InputForm label="Cantidad" handleChange={handleChange} name="quantity" placeholder="Cantidad del producto" type="number" value={product.quantity} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del producto" value={product.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitProduct}>Editar producto</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar