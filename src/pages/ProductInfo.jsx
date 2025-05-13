import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import ProductDetails from '../containers/ProductDetails';

import { useParams } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from '../containers/Carousel';
import ProductCard from '../containers/ProductCard';
import Review from '../containers/Review';
import TabPane from '../containers/TabPane';
import { getProductById, getSimilarType } from '../services/productService';
import { getReviewByProductId } from '../services/reviewService';

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviewItems, setReviewItems] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const fetchProduct = async (id) => {
    try {
      const fetchedProduct = await getProductById(id);
      setProduct(fetchedProduct);
      const fetchedSimilarProduct = await getSimilarType(fetchedProduct.type);
      setSimilarProducts(fetchedSimilarProduct);
      const fetchedReview = await getReviewByProductId(id);
      fetchedReview.sort((a, b) => b.star - a.star);
      setReviewItems(fetchedReview);
    } catch (error) {
      console.error(error);
    }
  }


  // mocking the fecthing data from db
  useEffect(() => {
    fetchProduct(productId);
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
        <Review headerlabel="รีวิว" reviews={reviewItems} productId={productId} setReview={setReviewItems} />
      </TabPane>

      <h3 className='my-8 text-3xl font-bold sm:text-4xl'>คุณอาจจะอยากลอง</h3>


      <Carousel>
        {/* ไว้รอทำ .map() */}
        {similarProducts.map(item => (
          <ProductCard key={item.productId} product={item} productId={productId} />
        ))}
      </Carousel>
    </Container >
  )
}

export default ProductInfo