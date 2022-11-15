import { useState } from 'react'
import InputStack from '../components/InputStack'
import { Button, Container, Heading, HStack, Input, Stack } from '@chakra-ui/react'

const index = () => {

  const [boton, setBoton] = useState(false)
  const [inputValue, setInputValue] = useState('')
  console.log(inputValue)

  const imprimir = (e) => {
    if (e.target.name === 'hola') {
      setInputValue(e.target.value)
    } else {
      console.log("Este input es el incorrecto")
    }
  }

  const opcion = () => {
    if (boton) {
      return "red"
    } else {
      return "blue"
    }
  }


  return (
    <>
      <Container maxW="container.xl">
        <Stack spacing={3} my={'40'} justify="center">
          <Heading as="h1" size="2xl" textAlign={"center"} color={opcion}>Hola Mundo</Heading>
          <HStack spacing={3} w={"full"}>
            <InputStack type="text" value={inputValue} consolemsg="Hola mundo, este es el primer input" imprimir={setInputValue} />
            <InputStack type="text" value="2" placeholder="Input 2" consolemsg="Hola mundo, este es el segundo input" imprimir={imprimir} />
          </HStack>
          <HStack spacing={3} w={"full"}>
            <InputStack type="text" value="3" placeholder="Input 3" consolemsg="Hola mundo, este es el tercer input" imprimir={imprimir} />
            <Input type="text" name='hola' onChange={imprimir} />
          </HStack>
          <Button colorScheme={'cyan'} onClick={() => setBoton(!boton)} size="sm">Submit</Button>
        </Stack>
      </Container>
    </>

  )
}

export default index