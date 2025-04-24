import React, { useState } from 'react';
import ProductCard from '../containers/ProductCard'; 
// import { Container, Grid, Typography } from '@mui/material';
import FilterSidebar from '../components/FilterSidebar'; 
const products = [

  {
    id: 1,
    name: "ข้าวกล้อง",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวกล้อง.webp",
    region: "ภาคกลาง",
    tags: ["ข้าวเพื่อสุขภาพ"]
  },
  {
    id: 2,
    name: "ข้าวมันปู",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวมันปู.webp",
    region: "ภาคเหนือ",
    tags: ["ข้าวเพื่อสุขภาพ"] 
  },
  {
    id: 3,
    name: "ข้าวไรซ์เบอร์รี่",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวไรซ์เบอร์รี่.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวเพื่อสุขภาพ"] 
  },
  {
    id: 4,
    name: "ข้าวสังข์หยดพัทลุง",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "public/assets/ข้าวสังข์หยดพัทลุง.webp",
    region: "ภาคใต้",
    tags: ["ข้าวเพื่อสุขภาพ"]
  },
  {
    id: 5,
    name: "ข้าวเสาให้",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/public/assets/ข้าวเสาไห้.webp",
    region: "ภาคกลาง",
    tags: ["ข้าวเพื่อสุขภาพ"]
  },
  // ... add region to other products or add other filterable properties
    {
        id: 6,
        name: "ข้าวหอมมะลิ กข 15",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวหอมมะลิ_กข15.webp",
        region: "ภาคอีสาน",
        tags: ["ข้าวหอมมะลิ"]
    },

    {
        id: 7,
        name: "ข้าวหอมมะลิ 105",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวหอมมะลิ105.webp",
        region: "ภาคเหนือ",
        tags: ["ข้าวหอมมะลิ"]
    },

    {
        id: 8,
        name: "ข้าวหอมมะลิทุ่งกุลา",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวหอมมะลิทุ่งกุลา.webp",
        region: "ภาคอีสาน",
        tags: ["ข้าวหอมมะลิ"]
    },

    {
        id: 9,
        name: "ข้าวหอมมะลิปทุมธานี",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวหอมมะลิปทุมธานี.webp",
        region: "ภาคกลาง",
        tags: ["ข้าวหอมมะลิ"]
    },

    {
        id: 10,
        name: "ข้าวเหนียว กข 6",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียว_กข6.webp",
        region: "ภาคอีสาน",
        tags: ["ข้าวเหนียว"]
    },

    {
        id: 11,
        name: "ข้าวเหนียวเขาวงกาฬสินธุ์",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียวเขาวงกาฬสินธุ์.webp",
        region: "ภาคอีสาน",
        tags: ["ข้าวเหนียว"]
    },

    {
        id: 12,
        name: "ข้าวเหนียวเขี้ยวงู",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียวเขี้ยวงู.webp",
        region: "ภาคเหนือ",
        tags: ["ข้าวเหนียว"]
    },

    {
        id: 13,
        name: "ข้าวเหนียวดำ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียวดำ.webp",
        region: "ภาคเหนือ",
        tags: ["ข้าวเหนียว", "ข้าวเพื่อสุขภาพ"]
    },

    {
        id: 14,
        name: "ข้าวเหนียว กข 4",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียวพันธุ์_กข.4.webp",
        region: "ภาคใต้",
        tags: ["ข้าวเหนียว"]
    },

    {
        id: 15,
        name: "ข้าวเหนียวสกลนคร",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหนียวสกลนคร.webp",
        region: "ภาคอีสาน",
        tags: ["ข้าวเหนียว"]
    },

    {
        id: 16,
        name: "ข้าวเหลืองประทิวชุมพร",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ข้าวเหลืองประทิวชุมพร.webp",
        region: "ภาคใต้",
        tags: ["ข้าวขาว"]
    },

    {
        id: 17,
        name: "ขนมข้าวกรอบทำจากข้าวหอมมะลิ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ขนมข้าวกรอบทำจากข้าวหอมมะลิ.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"] 
    },

    {
        id: 18,
        name: "ขนมข้าวอบกรอบแบบแท่ง",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ขนมข้าวอบกรอบแบบแท่ง.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"] 
    },

    {
        id: 19,
        name: "ขนมขบเคี้ยว รวมข้าวหลายชนิด",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ขนมขบเคี้ยว รวมข้าวหลายชนิด.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"] 
    },

    {
        id: 20,
        name: "ขนมขบเคี้ยวผสมเจลลี่มีข้าวเจ้าเป็นส่วนประกอบ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/ขนมขบเคี้ยวผสมเจลลี่มีข้าวเจ้าเป็นส่วนประกอบ.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"] 
    },

    {
        id: 21,
        name: "น้ำนมจมูกข้าวหอมมะลิ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/น้ำนมจมูกข้าวหอมมะลิ.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
    },

    {
        id: 22,
        name: "น้ำนมจมูกข้าวกล้อง",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/น้ำนมจมูกข้าวกล้อง.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
    },

    {
        id: 23,
        name: "น้ำมันรำข้าว ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/น้ำมันรำข้าว.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป"]
    },

    {
        id: 24,
        name: "น้ำมันรำข้าว ",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/น้ำมันรำข้าว plastic.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป"] 
    },

    {
        id: 25,
        name: "สาเก (แอลกอฮอลลต่ำ)",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ).jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
    },

    {
        id: 26,
        name: "สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ)",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ).jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
    },

    {
        id: 27,
        name: "เบียร์จากข้าวมอลท์  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/เบียร์จากข้าวมอลท์ (แอลกอฮอลลต่ำ) white.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"] 
    },

    {
        id: 28,
        name: "เบียร์จากข้าวมอลท์เพลเอล  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/เบียร์จากข้าวมอลท์เพลเอล (แอลกอฮอลลต่ำ).jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"] 
    },

    {
        id: 29,
        name: "เบียร์ดำจากข้าวมอลท์  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/เบียร์ดำจากข้าวมอลท์ (แอลกอฮอลลต่ำ) green.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"] 
    },

    {
        id: 30,
        name: "มอลท์จากข้าวหอมมะลิเชียงราย",
        price: "฿500",
        rating: 4.5,
        reviews: 120,
        image: "public/assets/มอลท์จากข้าวหอมมะลิเชียงราย.jfif",
        tags: ["ผลิตภัณฑ์แปรรูป"] 
    },

    {
      id: 31,
      name: "มอลท์ข้าวเหนียวดำ",
      price: "฿500",
      rating: 4.5,
      reviews: 120,
      image: "/assets/ข้าวกล้อง.webp",
      tags: ["ผลิตภัณฑ์แปรรูป"] 
  },
];

const ProductList = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    tags: [],
    rating: "any",
    price: [50, 1000], // Gotta make sure prices in products are numbers for proper filtering
    region: "ทั้งหมด",
  });

  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Function to apply filters
  const applyFilters = (product) => {
      // Filter by search term
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by region
      const matchesRegion = filters.region === "ทั้งหมด" || product.region === filters.region;

       // Filter by price (assuming product.price is a string like "฿500")
    const productPrice = parseFloat(product.price.replace('฿', ''));
    // Ensure productPrice is a valid number before comparison
    const matchesPrice = !isNaN(productPrice) && productPrice >= filters.price[0] && productPrice <= filters.price[1];


    // Filter by product tags/types
    // Check if product.tags exists and if any selected tag is included in product.tags
    const matchesTags = filters.tags.length === 0 || (product.tags && product.tags.some(tag => filters.tags.includes(tag)));


    // Filter by rating
    // Check if rating filter is 'any' or if product rating is >= selected rating
    const matchesRating = filters.rating === 'any' || (product.rating >= parseFloat(filters.rating));


    // Combine ALL filter conditions
    return matchesSearchTerm && matchesRegion && matchesPrice && matchesTags && matchesRating;
  };


  const filteredProducts = products.filter(applyFilters);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5); // show 5 more on click
  };

  // Function to close the filter drawer
  const closeFilterDrawer = () => {
    setShowFilterDrawer(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col-1 md:flex-row md:items-center md:justify-end gap-4 mb-6 w-full">
        {/* Left Section: Region Selector */}
        <div className="flex items-center gap-2 md:mr-auto">
          <span className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          <label htmlFor="region" className="text-sm font-medium">
            ภูมิภาค
          </label>
          {/* This region selector is now redundant as it's also in the sidebar.
              If I want to remove this one and only use the sidebar one,
              or keep them both and ensure they sync state.
              For now, let's keep it as it was in your original code but note the redundancy. */}
          <select
            id="region"
            value={filters.region}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, region: e.target.value }))
            }
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="ทั้งหมด">ทั้งหมด</option>
            <option value="ภาคกลาง">ภาคกลาง</option>
            <option value="ภาคเหนือ">ภาคเหนือ</option>
            <option value="ภาคอีสาน">ภาคอีสาน</option>
            <option value="ภาคใต้">ภาคใต้</option>
          </select>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex items-center gap-2 border px-3 py-2 rounded w-full md:w-1/2">
          <span className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="ค้นหาสินค้า..."
            className="flex-1 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Right Section: Filter Button */}
        <div>
          <button
            className="bg-black text-white p-2 rounded flex items-center gap-1"
            onClick={() => setShowFilterDrawer(true)}
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
          </button>
        </div>
      </div>

      {/* Filter Drawer Overlay */}
      {showFilterDrawer && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"
          onClick={closeFilterDrawer} // Close when clicking outside overlay
        ></div>
      )}

      {/* Filter Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-3/4 md:w-1/3 lg:w-1/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${showFilterDrawer ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <FilterSidebar
          filter={filters}
          setFilters={setFilters}
          onClose={closeFilterDrawer} // Pass the close function
        />
      </div>

      <h2 className="text-2xl font-extrabold mb-7">สินค้าทั้งหมด</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-0 gap-y-7">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-300"
          >
            ดูเพิ่มเติม ({filteredProducts.length - visibleCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;