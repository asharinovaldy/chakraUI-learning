import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

function CardFavorite() {
  const list = [
    {
      id: 0,
      name: 'Mie Kuah Pedas',
      image: 'https://borneos.link/OBLd0qF',
      price: 10000,
    },
    {
      id: 1,
      name: 'Jalankotek',
      image: 'https://borneos.link/8egxTGF',
      price: 20000,
    },
    {
      id: 2,
      name: 'Ayam Kecap Pedas',
      image: 'https://borneos.link/BEvvLz6',
      price: 30000,
    },
    {
      id: 3,
      name: 'Martabak Telur',
      image: 'https://borneos.link/ARLCzFN',
      price: 40000,
    },
    {
      id: 4,
      name: 'Nasi Goreng',
      image: 'https://borneos.link/EZkW1D5',
      price: 50000,
    },
    {
      id: 5,
      name: 'Nasi Goreng',
      image: 'https://borneos.link/EZkW1D5',
      price: 50000,
    },
  ];
  return (
    <Flex
      borderWidth="1px"
      boxShadow="lg"
      width="255px"
      height="420px"
      borderRadius="8px"
      my={5}
      p={5}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Flex justifyContent="space-between">
        <Center bg="gray.100" borderRadius="8px" boxSize="50px">
          <Image src="https://res.cloudinary.com/borneos-img/image/upload/v1652516070/icons/Shape_rxf7or.svg" />
        </Center>
        <Flex flexDirection="column">
          <Text fontSize="16px" fontWeight={700} lineHeight="24px">
            Hobijajan Bontang
          </Text>
          <Text fontWeight={400} fontSize="14px" color="#50B83C">
            <CheckCircleIcon /> Toko Terlaris
          </Text>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="space-between" my={5}>
        {list &&
          list.length &&
          list.map(item => (
            <Image
              key={item.id}
              src={item.image}
              boxSize="64px"
              mt="10px"
              objectFit="cover"
              borderRadius="8px"
            />
          ))}
      </Flex>

      <Flex
        bg="gray.100"
        borderRadius="8px"
        p={3}
        justifyContent="space-evenly"
      >
        <Flex flexDirection="column" textAlign="center">
          <Text fontSize="14px" fontWeight={500} lineHeight="20px">
            10
          </Text>
          <Text
            fontSize="12px"
            fontWeight={400}
            lineHeight="18px"
            color="#959EAD"
          >
            Pilihan Menu
          </Text>
        </Flex>
        <Flex flexDirection="column" textAlign="center">
          <Text fontSize="14px" fontWeight={500} lineHeight="20px">
            <StarIcon /> 4,6
          </Text>
          <Text
            fontSize="12px"
            fontWeight={400}
            lineHeight="18px"
            color="#959EAD"
          >
            Store Rating
          </Text>
        </Flex>
      </Flex>
      <Button colorScheme="orange">Lihat Toko</Button>
    </Flex>
  );
}

export default CardFavorite;
