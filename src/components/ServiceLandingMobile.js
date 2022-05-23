import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDescription,
  Box,
  Center,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

const features = [
  {
    id: 1,
    title: 'Fast and Free Delivery',
    description: 'Free delivery for all orders over $200',
    image:
      'https://res.cloudinary.com/borneos-co/image/upload/v1652237494/images/icons/Shipping_ffy2mz.webp',
  },
  {
    id: 2,
    title: 'Mudah pilih pembayaran',
    description: 'Bayar dengan mudah cepat',
    image:
      'https://res.cloudinary.com/borneos-co/image/upload/v1652237814/images/icons/Money_yvufpz.webp',
  },
  {
    id: 3,
    title: '24/7 customer support',
    description: 'Friendly 24/7 customer support',
    image:
      'https://res.cloudinary.com/borneos-co/image/upload/v1652238387/images/icons/Customer_Service_cipaei.webp',
  },
];

function ServiceLandingMobile() {
  return (
    <Box borderWidth="1px" borderRadius="8px" p={5} width="350px">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="18px" fontWeight={700} lineHeight="28px">
                  Service Kami
                </Text>
              </Box>
              <AccordionIcon color="orange" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {features &&
              features.length &&
              features.map(item => (
                <Flex flexDirection="column" py={5}>
                  <Flex justifyContent="space-evenly" key={item.id}>
                    <Center bgColor="#fbe3d0" boxSize="50px" borderRadius="50%">
                      <Image src={item.image} />
                    </Center>
                    <Flex flexDirection="column">
                      <Text fontSize="14px" fontWeight={500}>
                        {item.title}
                      </Text>
                      <Text fontSize="10px" fontWeight={400}>
                        {item.description}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default ServiceLandingMobile;
