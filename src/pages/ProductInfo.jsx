import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ProductDetails from '../containers/ProductDetails';

import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from '../containers/Carousel';
import TabPane from '../containers/TabPane';


const mock = {
    id: 1,
    image: "/assets/ข้าวเสาไห้.webp",
    name: "ข้าวเสาไห้",
    price: 500,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    star: 4.8,
    numbersReview: 1873
}


const ProductInfo = () => {
    // let params = useParams();
    // console.log(params.productId);




    return (
        <Container sx={{ p: 4 }} maxWidth='lg' >
            <div className='flex items-center justify-center mb-4 bg-gray-400 h-22' id="filter">
                <p className='text-white'>filter component placeholder</p>
            </div>

            <ProductDetails
                image={mock.image}
                name={mock.name}
                price={mock.price}
                description={mock.description}
                star={mock.star}
                numbersReview={mock.numbersReview}
            />

            <TabPane>
                {/* ไว้รอทำ .map() */}
                <p headerlabel="Description">TEST1</p>
                <p headerlabel="Reviews">TEST2</p>
            </TabPane>

            <Typography variant='h3' component='h1'
                sx={{
                    fontSize: { sm: "1.75rem", md: "2.5rem" },
                    my: 4,
                }}
            >
                คุณอาจจะอยากลอง
            </Typography>

            <Carousel>
                {/* ไว้รอทำ .map() */}
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
                <Box className="flex rounded-lg items-center justify-center bg-gray-300 h-[229px] w-[152px]">Product Card</Box>
            </Carousel>

        </Container >
    )
}

export default ProductInfo