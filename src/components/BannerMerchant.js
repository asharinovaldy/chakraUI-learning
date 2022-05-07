import { Box, Container, HStack, useMergeRefs, Flex } from "@chakra-ui/react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import CardMerchant from "./CardMerchant"
import Product from "./Product"
import { useState } from "react"

function BannerMerchant(){
    const form = {
        orderName: '',
        orderPrice: '',
    }
    const [stateList, setStateList] = useState(form)
    console.log("🚀 ~ file: BannerMerchant.js ~ line 15 ~ BannerMerchant ~ stateList", stateList)

    function click(val) {
        console.log("🚀 ~ file: BannerMerchant.js ~ line 18 ~ click ~ val", val)
        setStateList({
            ...stateList,
            orderName: val.name,
            orderPrice: val.price,
        })
    }

    const [sliderRef] = useKeenSlider({
        slides: {
            
            perView: 4.5,
            spacing: 15,
        },
    })

    const list = [
        {
            id: 0,
            name: 'Mie Kuah Pedas',
            image: 'https://borneos.link/OBLd0qF',
            price: 10000
        },
        {
            id: 1,
            name: 'Jalankotek',
            image: 'https://borneos.link/8egxTGF',
            price: 20000
        },
        {
            id: 2,
            name: 'Ayam Kecap Pedas',
            image: 'https://borneos.link/BEvvLz6',
            price: 30000
        },
        {
            id: 3,
            name: 'Martabak Telur',
            image: 'https://borneos.link/ARLCzFN',
            price: 40000
        },
        {
            id: 4,
            name: 'Nasi Goreng',
            image: 'https://borneos.link/EZkW1D5',
            price: 50000
        }
    ]

    function formatCurrency(bilangan, prefix){
        var	number_string = bilangan.toString(),
            sisa 	= number_string.length % 3,
            rupiah 	= number_string.substr(0, sisa),
            ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
                
        if (ribuan) {
            var separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return `${prefix ? prefix : ''} ${rupiah}`; 
    }

    return (
        <Box w='100%' bg='gray.100' p={'5'} my={'5'} >
            <Container maxW='container.xl'>
                <HStack>
                    <CardMerchant merchant= "Nasgor Tiarbah" time="10:00 - 22:00 WITA" totalMenu = "15" location="Gunung Telihan" />

                    <Flex ref={useMergeRefs(sliderRef)} className='keen-slider' p='32px' >
                        { list && !!list.length && list.map((item) => 

                            <Box key={item.id} className="keen-slider__slide" >
                                <Product productImage={item.image} onClick={() => click(item)} productName={item.name} productPrice={formatCurrency(item.price, 'IDR')} />
                            </Box>

                         ) || null  }
                        

                    </Flex>
                </HStack>

            </Container>
        </Box>
    )
}

export default BannerMerchant