import React, { useContext } from "react";
import { Link } from "react-router";
import ButtonFilter from "../components/ButtonFilter";
import ButtonMain from "../components/ButtonMain";
import Carousel from "../containers/Carousel";
import ProductCard from "../containers/ProductCard";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

const Home = () => {
  const { filters, setFilters } = useContext(CartContext);

  return (
    <div>
      {/* hero section */}
      <section className="hero-section h-[654px] flex sm:justify-center">
        <div className="flex-col items-start hidden mt-40 mr-20 sm:flex">
          {/* <Typography variant="h3" component="h3">
                        <span className='text-6xl text-accent'>ข้าว</span>คุณภาพจากใจ <br/>ส่งตรงถึงคุณ
                    </Typography> */}
          <h3 className="text-5xl font-semibold text-nowrap">
            <span className="text-accent text-7xl">ข้าว</span>คุณภาพจากใจ <br />
            ส่งตรงถึงคุณ
          </h3>
          <p className="mt-2 mb-5 text-xl">
            เลือกข้าวคุณภาพ เพื่อมื้อพิเศษของคุณ
          </p>
          <Link to="products">
            <ButtonMain
              types="submit"
              className="py-6 mt-4 mb-16 sm:w-40 bg-[#01c9ac]"
            >
              ซื้อสินค้า
            </ButtonMain>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <figure className="relative overflow-hidden sm:flex -z-0">
            <figure className="w-auto h-auto bg-accent rounded-b-full top-0 right-0 sm:w-[480px] sm:h-[500px]">
              <img src="/assets/homepage-img.png" alt="homepage image" />
            </figure>
          </figure>
          <Link to="products" className="sm:hidden">
            <ButtonMain
              types="submit"
              className="py-6 mt-4 mb-16 sm:w-40 bg-[#01c9ac]"
            >
              ซื้อสินค้า
            </ButtonMain>
          </Link>
        </div>
      </section>

      {/* recommend section */}
      <section className="flex flex-col items-center mt-10">
        <h2 className="text-4xl font-bold mb-10 sm:text-[52px]">สินค้าขายดี</h2>
        <div className="w-full sm:w-7xl ">
          <Carousel>
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* image section */}
      <section className="flex flex-col mt-10 mb-20">
        <div className="mx-auto">
          <figure className="flex ml-20 sm:justify-end">
            <img
              src="/assets/field.jpg"
              alt="image-decorate1"
              className="h-[400px] sm:w-auto sm:h-auto"
            />
          </figure>
          <figure className="mt-4">
            <img
              src="/assets/rice-field.jpg"
              alt="image-decorate2"
              className="h-[200px] sm:w-1/2 sm:h-auto"
            />
          </figure>
        </div>
      </section>

      {/* filter section */}
      <section className="grid grid-cols-2 sm:flex sm:flex-col ">
        <div className="category-1 flex flex-col justify-center items-center h-[200px] sm:h-[280px]">
          {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวหอมมะลิ</Typography> */}
          <h3 className="text-[28px] font-bold my-2 sm:text-[44px] text-black">
            ข้าวหอมมะลิ
          </h3>
          <ButtonFilter
            onClick={() =>
              setFilters((prev) => {
                return { ...prev, types: ["ข้าวหอมมะลิ"] };
              })
            }
          >
            ซื้อสินค้า
          </ButtonFilter>
        </div>
        <div className="category-2 flex flex-col justify-center items-center h-[200px] sm:h-[280px]">
          {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวเหนียว</Typography> */}
          <h3 className="text-[28px] font-bold my-2 sm:text-[44px] text-black">
            ข้าวเหนียว
          </h3>
          <ButtonFilter
            onClick={() =>
              setFilters((prev) => {
                return { ...prev, types: ["ข้าวเหนียว"] };
              })
            }
          >
            ซื้อสินค้า
          </ButtonFilter>
        </div>
        <div className="category-3 flex flex-col justify-center items-center h-[200px] sm:h-[280px]">
          {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600'}}>ข้าวขาว</Typography> */}
          <h3 className="text-[28px] font-bold my-2 sm:text-[44px] text-black">
            ข้าวขาว
          </h3>
          <ButtonFilter
            onClick={() =>
              setFilters((prev) => {
                return { ...prev, types: ["ข้าวขาว"] };
              })
            }
          >
            ซื้อสินค้า
          </ButtonFilter>
        </div>
        <div className="category-4 flex flex-col justify-center items-center h-[200px] sm:h-[280px]">
          {/* <Typography component="h3" sx={{fontSize: {xs:'1.25rem', sm:'2.25rem'}, fontWeight: '600' }}>ข้าวเพื่อสุขภาพ</Typography> */}
          <h3 className="text-[28px] font-bold my-2 sm:text-[44px] text-primary">
            ข้าวเพื่อสุขภาพ
          </h3>
          <ButtonFilter
            onClick={() =>
              setFilters((prev) => {
                return { ...prev, types: ["ข้าวเพื่อสุขภาพ"] };
              })
            }
          >
            ซื้อสินค้า
          </ButtonFilter>
        </div>
      </section>

      {/* other product */}
      <section className="flex flex-col items-center">
        {/* <Typography variant="h3" component="h2">ผลิตภัณฑ์แปรรูปจากข้าว</Typography> */}
        <h2 className="text-4xl font-bold my-10 sm:text-[52px]">
          ผลิตภัณฑ์แปรรูปจากข้าว
        </h2>
        <div className="w-full sm:w-7xl  ">
          <Carousel>
            {products.slice(17, 31).map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* promotion section */}
      <section className="flex items-center justify-between h-40 promotion-section mt-15">
        <p className="mx-10 font-semibold sm:text-lg">
          Free Delivery
          <br /> On all order over ฿1000
        </p>
        <img
          src="assets/promotionbanner.png"
          alt="footer-image"
          className="h-40"
        />
      </section>
    </div>
  );
};

export default Home;
