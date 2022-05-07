import { Box, Button, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react"

function BannerPromotions(){
    return (
        
        <Flex justifyContent='space-around' p={'5'}  bg='blue.50'  boxShadow='lg' my={'5'} w='100%' borderRadius='8px'>
            <Image src="https://borneos.link/EBk4P0L" boxSize='300px' objectFit='cover' borderRadius='8px' /> 
            
            <VStack my='55px' alignItems='start' maxH={'100%'} justifyContent='space-evenly'> 
                <Text textTransform={'uppercase'} fontWeight='medium' color='teal' fontSize='14px' lineHeight='20px'  >
                    flash sale 7.7.7
                </Text>
                <Text textTransform={'capitalize'} fontWeight='medium' color='black' fontSize='36px' lineHeight='52px'  >
                    macbook pro
                </Text>
                <Text fontWeight='400' color='gray' fontSize='16px' lineHeight='26px'  >
                    Smarter and intuitive with the same expert design <br/> and detail. Plus combine innovative latest AI features
                </Text>

                <Button bg='teal' p={'3'} color={'white'}>
                    Buy Now for $750
                </Button>
            </VStack>
        </Flex>
        
    )
}

export default BannerPromotions