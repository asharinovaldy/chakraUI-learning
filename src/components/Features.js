import { ChatIcon, CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Flex, Text } from "@chakra-ui/react"

function Features(){

    return (
        <Flex px={'5'}>
            <Flex direction={'column'} justifyContent='center'>
                <CheckCircleIcon color={'teal'} />
            </Flex>
            <Box px={'5'}>
                <Text fontSize={'xl'} fontWeight={'bold'} > Authorized Store </Text>
                <Text color={'gray.400'}> Trusted UMKM  </Text>
            </Box>

            <Flex direction={'column'} justifyContent='center'>
                <ChatIcon color={'teal'} />
            </Flex>
            <Box px={'5'}>
                <Text fontSize={'xl'} fontWeight={'bold'} > Fast Response </Text>
                <Text color={'gray.400'}> Friendly 24/7 support </Text>
            </Box>

        </Flex>
    )
}

export default Features