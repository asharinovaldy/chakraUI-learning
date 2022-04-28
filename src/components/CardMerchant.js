import { CheckCircleIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react"

function CardMerchant(props){

    const { merchant, time, totalMenu, location } = props

    return(
        
        <Box p={'3'} borderWidth='1px' width='280px'  rounded='lg' my='5' boxShadow='lg' bg='white' >
            <VStack justify='space-evenly' height='340px'>
                <MoonIcon color='teal' width='32px' height='32px'  />
                <Text fontSize='18px' fontWeight='medium' lineHeight='20px' color='black' marginTop='18px' > { merchant } </Text>
                <Text fontSize='12px' lineHeight='18px' color='gray' fontWeight='normal' > { location } </Text>
                <Text fontSize='18px' lineHeight='18px' color='navy' fontWeight='bold' > { time } </Text>

                <Flex bg='gray.100' justifyContent='space-around' borderRadius={'8px'} alignItems='center' width='250px' height='60px'>
                    <Box textAlign='center'>
                        <Text fontSize='16px' fontWeight='bold'>
                            { totalMenu }
                        </Text>
                        <Text fontSize='12px' fontWeight='regular'>
                            Varian Menu
                        </Text>
                    </Box>
                    <Box textAlign='center'>
                        <CheckCircleIcon color='teal' />
                        <Text textAlign='center' fontSize='12px' fontWeight='regular'>
                            Toko Pilihan
                        </Text>
                    </Box>
                </Flex>

                <Button leftIcon={<SearchIcon />} p='5' my='40px' fontSize='14px' colorScheme='orange' isFullWidth >Lihat Toko</Button>

            </VStack>
        </Box>
    )
}

export default CardMerchant