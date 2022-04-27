import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

function CardCategory(props){

    const { title } = props

    return(

        <Box p={'3'} borderWidth='1px' rounded='lg' my='5' width='200px' justifyContent='space-around' boxShadow='lg' >
            <Box bg='teal' p='5' borderRadius='8px' width='68px' textAlign='center' >
                <CalendarIcon color='white' alignItems='baseline' />
            </Box>
            <Text fontSize='14px' fontWeight='bold' mt='20px' lineHeight='21px'>
                { title }
            </Text>
            <Text fontSize='xs' color='gray.500' >2,3k items</Text>
        </Box>
    )
}

export default CardCategory