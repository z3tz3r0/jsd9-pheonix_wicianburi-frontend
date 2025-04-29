import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../containers/ProductDetails';

import { useParams } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from '../containers/Carousel';
import ProductCard from '../containers/ProductCard';
import Review from '../containers/Review';
import TabPane from '../containers/TabPane';
import mockReviews from '../data/mockReviews';
import products from '../data/products';

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviewItems, setReviewItems] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  // mocking the fecthing data from db
  useEffect(() => {
    const numericProductId = Number(productId);
    const foundProduct = products.find((product) => product.product_id === numericProductId);
    const sameTypeProducts = products.filter((product) => product.type === foundProduct.type);

    if (foundProduct) {
      setProduct(foundProduct);
      setSimilarProducts(sameTypeProducts);
      const productReview = mockReviews.filter((review) => foundProduct.product_id === review.product_id);
      setReviewItems(productReview)
    } else {
      console.error(`Product with ID ${numericProductId} not found.`);
      setProduct(null);
      setReviewItems([]);
    }
  }, [productId]);

  if (!product) {
    return (
      <Container sx={{ p: 4 }} maxWidth='lg' >
        <div>Loading product details...</div>
      </Container>
    )
  }

  return (
    <Container sx={{ p: 4 }} maxWidth='lg' >

      <ProductDetails
        productItem={product}
        reviews={reviewItems}
      />

      <TabPane>
        {/* ไว้รอทำ .map() */}
        <p headerlabel="รายละเอียดสินค้า" className='min-h-[20dvh]'>{product.description}</p>
        <Review headerlabel="รีวิว" reviews={reviewItems} />
      </TabPane>

      <h3 className='my-8 text-3xl font-bold sm:text-4xl'>คุณอาจจะอยากลอง</h3>


      <Carousel>
        {/* ไว้รอทำ .map() */}
        {similarProducts.map(item => (
          <ProductCard key={item.product_id} product={item} />
        ))}
      </Carousel>
    </Container >
  )
}

export default ProductInfo