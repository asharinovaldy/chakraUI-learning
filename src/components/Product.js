import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"

function Product(props){

    const { productImage, productName, productPrice } = props

    return (
        <Box w='190px' borderRadius='8px' borderWidth='1px' my={'5'} boxShadow='lg' >
            <Image src={ productImage } borderTopRightRadius='8px' borderTopLeftRadius='8px' width='190px' height='190px' objectFit='cover' />

            <VStack p='3' align='start' justifyContent='space-evenly'>
                <Text fontSize={'md'} fontWeight='bold' > { productName } </Text>
                <Text fontSize={'sm'} color='green.300' > { productPrice } </Text>

                <Button leftIcon={<ChevronRightIcon />} fontSize='14px' colorScheme='orange' isFullWidth>
                    Pesan Sekarang
                </Button>
            </VStack>
        </Box>
    )

}

export default Product