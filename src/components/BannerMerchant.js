import { Box, Container, HStack, useMergeRefs, Flex } from "@chakra-ui/react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import CardMerchant from "./CardMerchant"
import Product from "./Product"

function BannerMerchant(){

    const [sliderRef] = useKeenSlider({
        slides: {
            
            perView: 4.5,
            spacing: 15,
        },
    })

    return (
        <Box w='100%' bg='gray.100' p={'5'} my={'5'} >
            <Container maxW='container.xl'>
                <HStack>
                    <CardMerchant merchant= "Nasgor Tiarbah" time="10:00 - 22:00 WITA" totalMenu = "15" location="Gunung Telihan" />

                    <Flex ref={useMergeRefs(sliderRef)} className='keen-slider' p='32px' >
                        <Box className="keen-slider__slide" >
                            <Product productImage='https://borneos.link/OBLd0qF	' productName='Mie Kuah Pedas' productPrice='Rp. 20.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/8egxTGF' productName='Jalankotek' productPrice='Rp. 8.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/BEvvLz6' productName='Ayam Kecap Pedas' productPrice='Rp. 10.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/ARLCzFN	' productName='Martabak Telur' productPrice='Rp. 30.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/EZkW1D5' productName='Nasi Goreng' productPrice='Rp. 12.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/dnHQtJu' productName='Cumi Bakar' productPrice='Rp. 25.000' />
                        </Box>
                        <Box className="keen-slider__slide">
                            <Product productImage='https://borneos.link/RqK8ik3' productName='Kue Tart Coklat' productPrice='Rp. 40.000' />
                        </Box>

                    </Flex>
                </HStack>

            </Container>
        </Box>
    )
}

export default BannerMerchant