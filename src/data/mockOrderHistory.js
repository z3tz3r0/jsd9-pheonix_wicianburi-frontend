const orderHistories = [
  {
    orderId: 1236,
    userId: "1",
    orderDate: "2025-03-22",
    stateVariant: "รอยืนยัน",// "กำลังจัดส่ง", "จัดส่งสำเร็จ",
    paymentSlipLink: "string", // link
    totalAmount: 557, //ไม่รวมขนส่ง
    deliveryFee: 100,
    createdAt: "2025-03-22",
    updatedAt: "2025-03-24",
    orderDetails:[
      {
          orderItemId: "od_001",
          product_id: 6,
          name: "ข้าวหอมมะลิ 105",
          type: "ข้าวหอมมะลิ",
          region: "ภาคกลาง",
          variantLabel: "1 กิโลกรัม",
          variantValue: "1kg",
          price: 50,
          quantity: 3,
          image: "assets/ข้าวหอมมะลิ105.webp",
      },{
          orderItemId: "od_002",
          product_id: 10,
          name: "ข้าวเหนียว กข6",
          type: "ข้าวเหนียว",
          region: "ภาคอีสาน",
          variantLabel: "5 กิโลกรัม",
          variantValue: "5kg",
          price: 175,
          quantity: 2,
          image: "assets/ข้าวเหนียว_กข6.webp",
      },{
          orderItemId: "od_003",
          product_id: 4,
          name: "ข้าวสังข์หยดพัทลุง",
          type: "ข้าวเพื่อสุขภาพ",
          region: "ภาคใต้",
          variantLabel: "1 กิโลกรัม",
          variantValue: "1kg",
          price: 57,
          quantity: 1,
          image: "assets/ข้าวสังข์หยดพัทลุง.webp",
      },
    ]
  },{
    orderId: 1235,
    userId: "1",
    orderDate: "2025-03-21",
    stateVariant: "กำลังจัดส่ง",
    paymentSlipLink: "string", // link
    totalAmount: 750, //ไม่รวมขนส่ง,
    deliveryFee: 100,
    createdAt: "2025-03-21",
    updatedAt: "2025-03-23",
    orderDetails:[
      {
          orderItemId: "od_001",
          product_id: 3,
          name: "ข้าวไรซ์เบอร์รี่",
          type: "ข้าวเพื่อสุขภาพ",
          region: "ภาคอีสาน",
          variantLabel: "1 กิโลกรัม",
          variantValue: "1kg",
          price: 100,
          quantity: 3,
          image: "assets/ข้าวไรซ์เบอร์รี่.webp",
      },{
          orderItemId: "od_002",
          product_id: 10,
          name: "ข้าวกล้อง",
          type: "ข้าวเพื่อสุขภาพ",
          region: "ภาคกลาง",
          variantLabel: "5 กิโลกรัม",
          variantValue: "5kg",
          price: 225,
          quantity: 2,
          image: "assets/ข้าวกล้อง.webp",
      },
    ]
  },{
    orderId: 1234,
    userId: "1",
    orderDate: "2025-03-20",
    stateVariant: "จัดส่งสำเร็จ",
    paymentSlipLink: "string", // link
    totalAmount: 226, //ไม่รวมขนส่ง,
    deliveryFee: 100,
    createdAt: "2025-03-20",
    updatedAt: "2025-03-22",
    orderDetails:[
      {
          orderItemId: "od_001",
          product_id: 6,
          name: "ข้าวหอมมะลิ 105",
          type: "ข้าวหอมมะลิ",
          region: "ภาคเหนือ",
          variantLabel: "1 กิโลกรัม",
          variantValue: "1kg",
          price: 50,
          quantity: 3,
          image: "assets/ข้าวหอมมะลิ105.webp",
      },{
          orderItemId: "od_002",
          product_id: 8,
          name: "ข้าวหอมมะลิทุ่งกุลา",
          type: "ข้าวหอมมะลิ",
          region: "ภาคอีสาน",
          variantLabel: "1 กิโลกรัม",
          variantValue: "1kg",
          price: 38,
          quantity: 2,
          image: "assets/ข้าวหอมมะลิทุ่งกุลา.webp",
      },
    ]
  },
]

  export default orderHistories;

