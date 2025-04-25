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
    image: "/assets/ข้าวสังข์หยดพัทลุง.webp",
    region: "ภาคใต้",
    tags: ["ข้าวเพื่อสุขภาพ"]
  },
  {
    id: 5,
    name: "ข้าวเสาให้",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเสาไห้.webp",
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
    image: "/assets/ข้าวหอมมะลิ_กข15.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวหอมมะลิ"]
  },

  {
    id: 7,
    name: "ข้าวหอมมะลิ 105",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวหอมมะลิ105.webp",
    region: "ภาคเหนือ",
    tags: ["ข้าวหอมมะลิ"]
  },

  {
    id: 8,
    name: "ข้าวหอมมะลิทุ่งกุลา",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวหอมมะลิทุ่งกุลา.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวหอมมะลิ"]
  },

  {
    id: 9,
    name: "ข้าวหอมมะลิปทุมธานี",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวหอมมะลิปทุมธานี.webp",
    region: "ภาคกลาง",
    tags: ["ข้าวหอมมะลิ"]
  },

  {
    id: 10,
    name: "ข้าวเหนียว กข 6",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียว_กข6.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวเหนียว"]
  },

  {
    id: 11,
    name: "ข้าวเหนียวเขาวงกาฬสินธุ์",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียวเขาวงกาฬสินธุ์.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวเหนียว"]
  },

  {
    id: 12,
    name: "ข้าวเหนียวเขี้ยวงู",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียวเขี้ยวงู.webp",
    region: "ภาคเหนือ",
    tags: ["ข้าวเหนียว"]
  },

  {
    id: 13,
    name: "ข้าวเหนียวดำ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียวดำ.webp",
    region: "ภาคเหนือ",
    tags: ["ข้าวเหนียว", "ข้าวเพื่อสุขภาพ"]
  },

  {
    id: 14,
    name: "ข้าวเหนียว กข 4",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียวพันธุ์_กข.4.webp",
    region: "ภาคใต้",
    tags: ["ข้าวเหนียว"]
  },

  {
    id: 15,
    name: "ข้าวเหนียวสกลนคร",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหนียวสกลนคร.webp",
    region: "ภาคอีสาน",
    tags: ["ข้าวเหนียว"]
  },

  {
    id: 16,
    name: "ข้าวเหลืองประทิวชุมพร",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ข้าวเหลืองประทิวชุมพร.webp",
    region: "ภาคใต้",
    tags: ["ข้าวขาว"]
  },

  {
    id: 17,
    name: "ขนมข้าวกรอบทำจากข้าวหอมมะลิ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ขนมข้าวกรอบทำจากข้าวหอมมะลิ.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"]
  },

  {
    id: 18,
    name: "ขนมข้าวอบกรอบแบบแท่ง",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ขนมข้าวอบกรอบแบบแท่ง.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"]
  },

  {
    id: 19,
    name: "ขนมขบเคี้ยว รวมข้าวหลายชนิด",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ขนมขบเคี้ยว รวมข้าวหลายชนิด.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"]
  },

  {
    id: 20,
    name: "ขนมขบเคี้ยวผสมเจลลี่มีข้าวเจ้าเป็นส่วนประกอบ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/ขนมขบเคี้ยวผสมเจลลี่มีข้าวเจ้าเป็นส่วนประกอบ.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "ขนมขบเคี้ยว"]
  },

  {
    id: 21,
    name: "น้ำนมจมูกข้าวหอมมะลิ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/น้ำนมจมูกข้าวหอมมะลิ.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 22,
    name: "น้ำนมจมูกข้าวกล้อง",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/น้ำนมจมูกข้าวกล้อง.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 23,
    name: "น้ำมันรำข้าว ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/น้ำมันรำข้าว.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป"]
  },

  {
    id: 24,
    name: "น้ำมันรำข้าว ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/น้ำมันรำข้าว plastic.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป"]
  },

  {
    id: 25,
    name: "สาเก (แอลกอฮอลลต่ำ)",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/สินค้าแปรรูป_สาเก.jpg",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 26,
    name: "สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ)",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ).jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 27,
    name: "เบียร์จากข้าวมอลท์  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/เบียร์จากข้าวมอลท์ (แอลกอฮอลลต่ำ) white.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 28,
    name: "เบียร์จากข้าวมอลท์เพลเอล  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/เบียร์จากข้าวมอลท์เพลเอล (แอลกอฮอลลต่ำ).jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 29,
    name: "เบียร์ดำจากข้าวมอลท์  ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/เบียร์ดำจากข้าวมอลท์ (แอลกอฮอลลต่ำ) green.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป", "เครื่องดื่ม"]
  },

  {
    id: 30,
    name: "มอลท์จากข้าวหอมมะลิเชียงราย",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/มอลท์จากข้าวหอมมะลิเชียงราย.jfif",
    tags: ["ผลิตภัณฑ์แปรรูป"]
  },

  {
    id: 31,
    name: "มอลท์ข้าวเหนียวดำ",
    price: "฿500",
    rating: 4.5,
    reviews: 120,
    image: "/assets/สินค้าแปรรูป_มอลท์จากข้าวเหนียวดำ.jpg",
    tags: ["ผลิตภัณฑ์แปรรูป"]
  },
];

const ProductList = () => {
  return (
    <div>
      <ProductCard />
    </div>
  )
}
    </div >
  );
};

export default ProductList;