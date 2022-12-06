import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createProduct } from '../../data/products'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import productValidation from '../../validations/productValidation'

const productos = () => {

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
        description: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Producto</Heading>
            <Formik
                initialValues={product}
                validationSchema={productValidation}
                onSubmit={(values) => {
                    createProduct(values).then(res => {
                        router.push("/productos")
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del producto" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <HStack>
                                <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del producto" type="number" value={values.price} handleBlur={handleBlur} />
                                <InputForm label="Cantidad" handleChange={handleChange} name="quantity" placeholder="Cantidad del producto" type="number" value={values.quantity} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.price && errors.price && (
                                    <Text color={"red"}>{errors.price}</Text>
                                )}
                                {touched.quantity && errors.quantity && (
                                    <Text color={"red"}>{errors.quantity}</Text>
                                )}
                            </HStack>
                            <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del producto" value={values.description} handleBlur={handleBlur} />
                            {touched.description && errors.description && (
                                <Text color={"red"}>{errors.description}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default productos


{/* <Stack spacing={4} mt={10}>
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
            </HStack> */}