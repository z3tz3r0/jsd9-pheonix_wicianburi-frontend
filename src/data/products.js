// f:\Full Stack Developer project\GenerationTH\final-group-proj\jsd9-pheonix_wicianburi_grill-frontend\src\data\products.js

const products = [
  {
    product_id: 1,
    name: "ข้าวกล้อง",
    type: "ข้าวเพื่อสุขภาพ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 45 },
      { label: "5 กิโลกรัม", value: "5kg", price: 225 },
    ],
    description: "มีเส้นใยสูง ช่วยบำรุงร่างกาย อุดมด้วยวิตามินและเกลือแร่",
    image: "assets/ข้าวกล้อง.webp",
    region: "ภาคกลาง", // Added
  },
  {
    product_id: 2,
    name: "ข้าวมันปู",
    type: "ข้าวเพื่อสุขภาพ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 38 },
      { label: "5 กิโลกรัม", value: "5kg", price: 190 },
    ],
    description: "สีแดงมันปู หุงแล้วนุ่มสวย มีสารแคโรทีนสูง",
    image: "assets/ข้าวมันปู.webp",
    region: "ภาคเหนือ", // Added
  },
  {
    product_id: 3,
    name: "ข้าวไรซ์เบอร์รี่",
    type: "ข้าวเพื่อสุขภาพ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 100 },
      { label: "5 กิโลกรัม", value: "5kg", price: 500 },
    ],
    description:
      "สีม่วงเข้ม หอมมัน คุณค่าทางอาหารสูง ช่วยลดความเสี่ยงโรคเรื้อรัง",
    image: "assets/ข้าวไรซ์เบอร์รี่.webp",
    region: "ภาคอีสาน", // Added
  },
  {
    product_id: 4,
    name: "ข้าวสังข์หยดพัทลุง",
    type: "ข้าวเพื่อสุขภาพ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 57 },
      { label: "5 กิโลกรัม", value: "5kg", price: 285 },
    ],
    description: "เมล็ดเล็กเรียว สีแดงเข้ม คุณค่าทางอาหารสูง ช่วยบำรุงโลหิต",
    image: "assets/ข้าวสังข์หยดพัทลุง.webp",
    region: "ภาคใต้", // Added
  },
  {
    product_id: 5,
    name: "ข้าวเสาไห้",
    type: "ข้าวขาว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 26 },
      { label: "5 กิโลกรัม", value: "5kg", price: 130 },
    ],
    description: "เมล็ดข้าวหุงขึ้นหม้อ ไม่แข็งกระด้าง ไม่บูดง่าย นิยมแปรรูป",
    image: "assets/ข้าวเสาไห้.webp",
    region: "ภาคกลาง", // Added
  },
  {
    product_id: 6,
    name: "ข้าวหอมมะลิ 105",
    type: "ข้าวหอมมะลิ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 50 },
      { label: "5 กิโลกรัม", value: "5kg", price: 250 },
    ],
    description:
      "มีกลิ่นหอมใบเตย ปลูกได้ดีที่สุดในไทย เมล็ดเรียวยาว หุงสุกแล้วมีกลิ่นหอมมาก",
    image: "assets/ข้าวหอมมะลิ105.webp",
    region: "ภาคเหนือ", // Added (Matched name with id 7 in ProductList)
  },
  {
    product_id: 7,
    name: "ข้าวหอมมะลิ กข15",
    type: "ข้าวหอมมะลิ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 40 },
      { label: "5 กิโลกรัม", value: "5kg", price: 200 },
    ],
    description: "หุง ต้ม นุ่ม มีกลิ่นหอม",
    image: "assets/ข้าวหอมมะลิ_กข15.webp",
    region: "ภาคอีสาน", // Added (Matched name with id 6 in ProductList)
  },
  {
    product_id: 8,
    name: "ข้าวหอมมะลิทุ่งกุลา",
    type: "ข้าวหอมมะลิ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 38 },
      { label: "5 กิโลกรัม", value: "5kg", price: 190 },
    ],
    description:
      "จากแหล่งปลูกที่ดีที่สุดในโลก “ทุ่งกุลาร้องไห้” เมล็ดข้าวยาวเรียว หอมและนุ่ม",
    image: "assets/ข้าวหอมมะลิทุ่งกุลา.webp",
    region: "ภาคอีสาน", // Added
  },
  {
    product_id: 9,
    name: "ข้าวหอมมะลิปทุมธานี",
    type: "ข้าวหอมมะลิ",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 32 },
      { label: "5 กิโลกรัม", value: "5kg", price: 160 },
    ],
    description: "ข้าวสุกจะนุ่มเหนียว และมีกลิ่นที่หอมมาก",
    image: "assets/ข้าวหอมมะลิปทุมธานี.webp",
    region: "ภาคกลาง", // Added
  },
  {
    product_id: 10,
    name: "ข้าวเหนียว กข6",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 35 },
      { label: "5 กิโลกรัม", value: "5kg", price: 175 },
    ],
    description: "เมล็ดยาวเรียว หอมเหนียวนุ่ม หุงขึ้นหม้อ",
    image: "assets/ข้าวเหนียว_กข6.webp",
    region: "ภาคอีสาน", // Added
  },
  {
    product_id: 11,
    name: "ข้าวเหนียวเขาวงกาฬสินธุ์",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 100 },
      { label: "5 กิโลกรัม", value: "5kg", price: 500 },
    ],
    description:
      "มีกลิ่นที่หอมมาก นุ่ม อร่อย และไม่เหนียวติดมือเหมือนข้าวเหนียวทั่วไป",
    image: "assets/ข้าวเหนียวเขาวงกาฬสินธุ์.webp",
    region: "ภาคอีสาน", // Added
  },
  {
    product_id: 12,
    name: "ข้าวเหนียวเขี้ยวงู",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 29 },
      { label: "5 กิโลกรัม", value: "5kg", price: 145 },
    ],
    description: "เมล็ดยาว สีขาวเลื่อมมัน เหนียวนุ่ม หอม",
    image: "assets/ข้าวเหนียวเขี้ยวงู.webp",
    region: "ภาคเหนือ", // Added
  },
  {
    product_id: 13,
    name: "ข้าวเหนียวดำ",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 60 },
      { label: "5 กิโลกรัม", value: "5kg", price: 300 },
    ],
    description:
      "สีม่วงดำ เนื้อสัมผัสแข็ง เหมาะสำหรับทำขนมและผลิตภัณฑ์สำหรับหมักดอง",
    image: "assets/ข้าวเหนียวดำ.webp",
    region: "ภาคเหนือ", // Added
  },
  {
    product_id: 14,
    name: "ข้าวเหนียว กข4",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 38 },
      { label: "5 กิโลกรัม", value: "5kg", price: 190 },
    ],
    description: "คุณภาพข้าวสุก แข็งร่วน ทานง่าย",
    image: "assets/ข้าวเหนียวพันธุ์ กข4.webp",
    region: "ภาคใต้", // Added
  },
  {
    product_id: 15,
    name: "ข้าวเหนียวสกลนคร",
    type: "ข้าวเหนียว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 58 },
      { label: "5 กิโลกรัม", value: "5kg", price: 290 },
    ],
    description: "นึ่งสุกแล้วเหนียวนุ่ม มีกลิ่นหอมน่าทาน",
    image: "assets/ข้าวเหนียวสกลนคร.webp",
    region: "ภาคอีสาน", // Added
  },
  {
    product_id: 16,
    name: "ข้าวเหลืองประทิวชุมพร",
    type: "ข้าวขาว",
    variants: [
      { label: "1 กิโลกรัม", value: "1kg", price: 28 },
      { label: "5 กิโลกรัม", value: "5kg", price: 140 },
    ],
    description: "เมล็ดเหลืองเลื่อมมัน หุงขึ้นหม้อ ทนโรคแมลง",
    image: "assets/ข้าวเหลืองประทิวชุมพร.webp",
    region: "ภาคใต้", // Added
  },
  {
    product_id: 17,
    name: "ข้าวตังทอดตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (50g)", value: "50g", price: 45 }],
    description:
      "ขนมข้าวตังทำจากข้าว 3 ชนิดได้แก่ ข้าวกล้อง ข้าวสังข์หยด และข้าวหอมมะลิ อร่อย กรอบ และมีกากใยสูง ",
    image: "assets/สินค้าแปรรูป_ข้าวตังทอด.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 18,
    name: "ขนมข้าวอบกรอบแบบแท่งตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (50g)", value: "50g", price: 45 }],
    description:
      "ขนมข้าวอบกรอบแบบแท่ง ทำจากข้าวไทยหลากหลายชนิด เช่น ข้าวกล้องหอมมะลิ ข้าวเหนียวดำ ข้าวไรซ์เบอร์รี่ และข้าวหอมนิล อบกรอบหอมธรรมชาติ อร่อยแบบได้ประโยชน์ในทุกคำ",
    image: "assets/สินค้าแปรรูป_ขนมข้าวอบกรอบแบบแท่ง.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 19,
    name: "ขนมเจลลี่ตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (25g)", value: "25g", price: 30 }],
    description:
      "เจลลี่รวมข้าวหลายชนิด ทั้งข้าวกล้อง ข้าวไรซ์เบอร์รี่ ข้าวเหนียวดำ และข้าวสังข์หยด ผสานกันในรสชาติเดียว เคี้ยวเพลิน ได้คุณค่าจากข้าวไทยแท้ทุกเมล็ด",
    image: "assets/สินค้าแปรรูป_ขนมเจลลี่.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 20,
    name: "ขนมเจลลี่ข้าวเจ้าตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (25g)", value: "25g", price: 35 }],
    description:
      "เจลลี่มีข้าวเจ้าเป็นส่วนประกอบ เคี้ยวหนึบหนับ หอมกลิ่นข้าวธรรมชาติ ผสานรสหวานสดชื่นของเจลลี่ อร่อย สนุกในคำเดียว",
    image: "assets/สินค้าแปรรูป_ขนมเจลลี่ข้าวเจ้า.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 21,
    name: "น้ำนมจมูกข้าวหอมมะลิตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (250ml)", value: "250ml", price: 65 }],
    description:
      "น้ำนมจมูกข้าวหอมมะลิ หอมละมุนจากธรรมชาติ อุดมด้วยวิตามินและสารต้านอนุมูลอิสระ ดื่มง่าย ได้ประโยชน์จากข้าวไทยแท้ทุกหยด",
    image: "assets/สินค้าแปรรูป_น้ำนมจมูกข้าวหอมมะลิ.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 22,
    name: "น้ำนมจมูกข้าวกล้องตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (250ml)", value: "250ml", price: 65 }],
    description:
      "น้ำนมจมูกข้าวกล้อง หอมกลิ่นข้าวแท้ อุดมด้วยไฟเบอร์ วิตามินบี และสารอาหารจากธรรมชาติ ดื่มดีทุกวัน เติมพลังแบบสุขภาพดีจากข้าวไทย",
    image: "assets/สินค้าแปรรูป_น้ำนมจมูกข้าวกล้อง.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 23,
    name: "น้ำมันรำข้าวตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (250ml)", value: "250ml", price: 85 }],
    description:
      "น้ำมันรำข้าว สกัดจากรำข้าวไทยคุณภาพ อุดมด้วยโอรีซานอล วิตามินอี และไขมันดี ช่วยดูแลหัวใจ บำรุงร่างกาย เติมสุขภาพดีในทุกมื้ออาหาร",
    image: "assets/สินค้าแปรรูป_น้ำมันรำข้าว.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 24,
    name: "น้ำมันรำข้าวพรีเมียมข้าวตราออลไรซ์",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (250ml)", value: "250ml", price: 95 }],
    description:
      "น้ำมันรำข้าว จากข้าวเกรดดีที่สุด สกัดจากรำและจมูกข้าวคุณภาพสูง อุดมด้วยโอรีซานอล วิตามินอี และไขมันดี บำรุงร่างกายจากภายใน เพื่อสุขภาพที่สมดุลในทุกวัน",
    image: "assets/สินค้าแปรรูป_น้ำมันรำข้าวพรีเมียม.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 25,
    name: "สาเก (แอลกอฮอลลต่ำ)",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (330ml)", value: "330ml", price: 250 }],
    description:
      "สาเกแอลกอฮอล์ต่ำ กลั่นจากข้าวไทยคุณภาพ หอมละมุน ดื่มง่าย ดื่มเพลิน ได้กลิ่นอายแบบญี่ปุ่นในสไตล์สุขภาพ สนุกแบบเบา ๆ แต่ยังได้รสชาติครบถ้วน",
    image: "assets/สินค้าแปรรูป_สาเก.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 26,
    name: "สาเกพรีเมี่ยม (แอลกอฮอลลต่ำ)",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ขวด (330ml)", value: "330ml", price: 450 }],
    description:
      "สาเกพรีเมี่ยม แอลกอฮอล์ต่ำ ผลิตจากข้าวไทยคุณภาพสูง ผ่านการหมักอย่างประณีตตามแบบฉบับญี่ปุ่น หอมละมุน ละเอียดอ่อน ดื่มง่ายแต่มีเอกลักษณ์ เหมาะสำหรับผู้ที่มองหาความละเมียดละไมในทุกจิบ",
    image: "assets/สินค้าแปรรูป_สาเกพรีเมี่ยม.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 27,
    name: "เบียร์ลาเกอร์ตราออลไรซ์ (แอลกอฮอลลต่ำ)",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 กระป๋อง (330ml)", value: "330ml", price: 120 }],
    description:
      "เบียร์จากข้าวมอลท์ลาเกอร์ รสนุ่ม กลมกล่อม ผลิตจากข้าวไทยผ่านกระบวนการมอลท์อย่างพิถีพิถัน ให้รสชาติเบียร์ที่แตกต่าง หอมละมุน ดื่มง่าย มีเอกลักษณ์เฉพาะตัวจากข้าวพื้นถิ่น",
    image: "assets/สินค้าแปรรูป_เบียร์ลาเกอร์.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 28,
    name: "เบียร์เพลเอลตราออลไรซ์ (แอลกอฮอลลต่ำ)",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 กระป๋อง (330ml)", value: "330ml", price: 150 }],
    description:
      "เบียร์จากข้าวมอลท์สไตล์เพลเอล รสชาติเบา สดชื่น ดื่มง่าย มีกลิ่นหอมของฮอปส์ผสานความละมุนจากข้าวมอลท์ไทยอย่างลงตัว ให้ประสบการณ์คราฟต์เบียร์ที่ไม่เหมือนใครในแบบไทยแท้",
    image: "assets/สินค้าแปรรูป_เบียร์เพลเอล.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 29,
    name: "เบียร์ดำจากข้าวมอลท์ตราออลไรซ์ (แแอลกอฮอลลต่ำ)",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 กระป๋อง (330ml)", value: "330ml", price: 160 }],
    description:
      "เบียร์ดำจากข้าวมอลท์ รสเข้ม ลึก มีคาแร็กเตอร์ กลิ่นหอมของข้าวคั่วและมอลท์ไทยผสานความขมละมุนของฮอปส์ดื่มแล้วสัมผัสได้ถึงความหนักแน่นแต่ละมุนในสไตล์เบียร์ดำแบบมีเอกลักษณ์ไทย",
    image: "assets/สินค้าแปรรูป_เบียร์ดำ.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 30,
    name: "มอลท์ข้าวหอมมะลิเชียงราย",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (450g)", value: "450g", price: 85 }],
    description:
      "มอลท์จากข้าวหอมมะลิเชียงราย หอมละมุนเป็นเอกลักษณ์  ผ่านกระบวนการมอลท์อย่างพิถีพิถัน คงรสชาติและกลิ่นของข้าวไทยแท้ นำไปทำเครื่องดื่มเพื่อสุขภาพ หรือนำไปสร้างสรรค์เครื่องดื่มคราฟต์ที่ต้องการความแตกต่างอย่างมีระดับ",
    image: "assets/สินค้าแปรรูป_มอลท์จากข้าวหอมมะลิ.jpg",
    // No region in ProductList data for this
  },
  {
    product_id: 31,
    name: "มอลท์ข้าวเหนียวดำ",
    type: "สินค้าแปรรูป",
    variants: [{ label: "1 ถุง (450g)", value: "450g", price: 95 }],
    description:
      "มอลท์จากข้าวเหนียวดำ หอมละมุนเป็นเอกลักษณ์  ผ่านกระบวนการมอลท์อย่างพิถีพิถัน คงรสชาติและกลิ่นของข้าวไทยแท้ นำไปทำเครื่องดื่มเพื่อสุขภาพ หรือนำไปสร้างสรรค์เครื่องดื่มคราฟต์ที่ต้องการความแตกต่างอย่างมีระดับ",
    image: "assets/สินค้าแปรรูป_มอลท์จากข้าวเหนียวดำ.jpg",
    // No region in ProductList data for this
  },
];

export default products;
