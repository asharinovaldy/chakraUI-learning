import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  ButtonGroup,
  Stack,
  Icon,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  InputGroup,
  HStack,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from '@chakra-ui/icons';
import CardProduct from './components';
import CardCategory from './components/CardCategory';
import CardMerchant from './components/CardMerchant';
import Product from './components/Product';

function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show);

  return (
    <ChakraProvider theme={theme}>
        <Box bg={'teal'} w='100%' p={4} color='white'>  
          This is the Box of Chakra
        </Box>

        <VStack>
          <Container maxW='container.sm'>
            <CardProduct />
            <Flex gap='5'>
              <CardCategory title='Kuliner' />
              <CardCategory title='Fashion' />
              <CardCategory title='Gadget' />
            </Flex>

            <Flex justifyContent='center' gap={'3'}>
              <CardMerchant merchant="Nasgor Tiarbah" time="10:00 - 22:00 WITA" totalMenu = "15" location="Gunung Telihan" />
              <CardMerchant merchant="Geprek Legenda" time="10:00 - 22:00 WITA" totalMenu = "25" location="Satimpo" />
            </Flex>

            <Flex justifyContent='center' gap={'3'}>
              <Product productImage='https://borneos.link/OBLd0qF	' productName='Spicy Noodle' productPrice='Rp. 20.000' />
              <Product productImage='https://borneos.link/RqK8ik3' productName='Choco Cake' productPrice='Rp. 40.000' />
            </Flex>

          </Container>
        </VStack>


    </ChakraProvider>
  );
}

export default App;
