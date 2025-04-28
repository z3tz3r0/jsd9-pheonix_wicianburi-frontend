const orderHistories = [
    {
      orderId: "1",
      userId: "",
      orderDate: "22 มีนาคม 2025",
      stateVariant: "ระหว่างการชำระ",
      totalAmount: 810,
      orderDetails:[
        {
            orderDetailId: "",
            product_id: 6,
            name: "ข้าวหอมมะลิ 105",
            type: "ข้าวหอมมะลิ",
            variants: [
            { label: "1 กก", value: "1kg", price: 50 },
            { label: "5 กก", value: "5kg", price: 250 },
            ],
            description:
            "มีกลิ่นหอมใบเตย ปลูกได้ดีที่สุดในไทย เมล็ดเรียวยาว หุงสุกแล้วมีกลิ่นหอมมาก",
            image: "assets/ข้าวหอมมะลิ105.webp",
        }
      ]
    },
    {
      orderId: "1235",
      orderDate: "21 มีนาคม 2025",
      stateVariant: "ระหว่างการจัดส่ง",
      totalPrice: 810,
    },
    {
      orderId: "1234",
      orderDate: "20 มีนาคม 2025",
      stateVariant: "สำเร็จ",
      totalPrice: 810,
    },
  ]

  export default orderHistories;