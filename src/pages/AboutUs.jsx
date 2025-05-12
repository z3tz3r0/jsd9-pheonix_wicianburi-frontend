import React, { useState } from 'react';
import TestimonialCard from '../components/TestimonialCard'; // Import the new component

const AboutUs = () => {
  const testimonialsData = [
    {
      quote:
        "ดิฉันประทับใจกับข้าวไรซ์เบอร์รี่ มากค่ะ หุงขึ้นหม้อ เมล็ดสวย หอมอร่อยเหมือนข้าวที่บ้านนาสมัยเด็กๆ เลยค่ะ ที่สำคัญคือรู้สึกได้เลยว่าเป็นข้าวใหม่ สดจริงๆ ค่ะ แถมยังได้สนับสนุนชาวนาโดยตรงอีกด้วย จะสั่งซื้อต่อไปแน่นอนค่ะ",
      author: 'คุณเรืองฤดี',
      rating: 4,
      image: '/assets/เรืองฤดี.jpg',
    },
    {
      quote:
        "ผมเป็นคนทานข้าวเยอะมาก และให้ความสำคัญกับคุณภาพของข้าว ทาง All Rice ไม่ทำให้ผิดหวังเลยครับ ข้าวมีให้เลือกหลากหลาย ผมลองสั่งมาหลายแบบแล้วก็อร่อยทุกชนิด การจัดส่งก็รวดเร็ว แพ็คมาอย่างดี ทำให้มั่นใจได้ว่าข้าวสะอาดและปลอดภัยครับ เป็นอีกหนึ่งช่องทางที่ดีมากๆ ในการซื้อข้าวคุณภาพ",
      author: 'คุณธนากร',
      rating: 5,
      image: '/assets/ธนากร.jpg'
    },
    {
      quote:
        "สนับสนุน All Rice ค่ะ นอกจากจะได้ข้าวดี มีคุณภาพแล้ว ยังรู้สึกดีที่ได้เป็นส่วนหนึ่งในการช่วยเหลือเกษตรกรไทยด้วยค่ะ ราคาอาจจะสูงกว่าท้องตลาดนิดหน่อย แต่เมื่อเทียบกับคุณภาพและความตั้งใจของผู้ขายแล้ว คุ้มค่ามากๆ ค่ะ เป็นกำลังใจให้ทีมงานนะคะ จะบอกต่อเพื่อนๆ และคนในครอบครัวให้มาอุดหนุนค่ะ",
      author: 'คุณนภา',
      rating: 4,
      image: '/assets/นภา.jpg'
    },

  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-16 md:py-24 lg:py-24">
      {/* About Us Heading */}
      <h1 className="mb-12 text-3xl font-bold text-center text-gray-800 md:text-3xl lg:text-4xl">
        เกี่ยวกับเรา
      </h1>

      {/* Our Story Section */}
      <section className="px-6 mb-20 md:px-12 lg:px-24">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
          <div className="mb-8 overflow-hidden rounded-lg shadow-md md:mb-0">
            <img
              src="/assets/farmer_with_magnificent_mountains.jpg"
              alt="Our Story Image"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-700 md:text-2xl lg:text-3xl">
              เรื่องราวของเรา
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              จุดเริ่มต้นของเรานั้นมาจากความตั้งใจเล็กๆ ที่อยากจะเห็นรอยยิ้มและความเป็นอยู่ที่ดีขึ้นของชาวนาในท้องถิ่นของเราเอง พวกเขาเหล่านี้คือผู้ที่ทุ่มเทแรงกายแรงใจ ปลูกข้าวด้วยความรักและความเอาใจใส่จากรุ่นสู่รุ่น แต่กลับต้องเผชิญกับความไม่แน่นอนของราคา และช่องทางการจัดจำหน่ายที่จำกัด พวกเราจึงก่อตั้ง All Rice (ออลไรซ์) ขึ้นมาด้วยความหวังที่จะเป็นสะพานเชื่อมโยงข้าวคุณภาพเยี่ยมจากมือชาวนาส่งตรงถึงมือผู้บริโภค โดยปราศจากพ่อค้าคนกลาง เพื่อให้ชาวนาได้รับผลตอบแทนที่เป็นธรรม และผู้บริโภคได้เข้าถึงข้าวสารแท้ คุณภาพดี ในราคาที่สมเหตุสมผล เรื่องราวของเราคือเรื่องราวของการสนับสนุนชุมชน และการสร้างความยั่งยืนให้กับวงจรการผลิตข้าวไทย
            </p>
            <p className="leading-relaxed text-gray-600">
              ด้วยความเชื่อมั่นในคุณภาพของข้าวไทย และศักยภาพของชาวนาของเรา All Rice ถือกำเนิดขึ้นด้วยความมุ่งมั่นที่จะสร้างตลาดที่เป็นธรรม โดยนำข้าวสารแท้จากไร่นาส่งตรงถึงมือผู้บริโภคโดยตรง เราต้องการที่จะตัดทอนขั้นตอนที่ไม่จำเป็น ลดอิทธิพลของพ่อค้าคนกลาง เพื่อให้ชาวนาได้รับผลตอบแทนที่คุ้มค่ากับความเหนื่อยยาก และผู้บริโภคได้เข้าถึงผลิตภัณฑ์ที่มาจากใจ ด้วยความโปร่งใส และความใส่ใจในทุกขั้นตอนการผลิต เรื่องราวของเราคือการเดินทางร่วมกันระหว่างผู้ผลิตและผู้บริโภค บนพื้นฐานของความเข้าใจและการสนับสนุนซึ่งกันและกัน
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 mb-20 md:px-12 lg:px-24">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-20 md:grid-flow-row-dense">
          <div className="mb-8 overflow-hidden rounded-lg shadow-md md:order-2 md:mb-0">
            <img
              src="/assets/A_scenic_landscape_rice_field.jpeg"
              alt="Our Mission Image"
              className="w-full h-auto"
            />
          </div>
          <div className="md:order-1">
            <h2 className="mb-6 text-xl font-semibold text-gray-700 md:text-2xl lg:text-3xl">
              พันธกิจของเรา
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              พันธกิจแรกของเราคือการเสริมสร้างพลังให้กับชุมชนชาวนาไทย โดยการมอบโอกาสในการเข้าถึงตลาดที่กว้างขึ้น และได้รับราคาที่เป็นธรรมสำหรับผลผลิตอันทรงคุณค่าของพวกเขา เราตระหนักดีว่าความยั่งยืนของธุรกิจเรานั้นผูกพันอย่างแยกไม่ออกกับการอยู่ดีกินดีของเกษตรกร
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              ประการที่สอง เรามุ่งมั่นที่จะนำเสนอข้าวสารไทยคุณภาพพรีเมียม ที่มีความหลากหลายของสายพันธุ์ รสชาติที่เป็นเอกลักษณ์ และคุณค่าทางโภชนาการสูง เราใส่ใจในทุกกระบวนการ ตั้งแต่การคัดเลือกเมล็ดพันธุ์ การเพาะปลูกด้วยวิธีที่เป็นมิตรต่อสิ่งแวดล้อม ไปจนถึงการเก็บเกี่ยวและบรรจุภัณฑ์ เพื่อให้มั่นใจว่าผู้บริโภคจะได้รับข้าวที่ดีที่สุด สดใหม่ และปลอดภัย
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              นอกจากนี้ เรายังให้ความสำคัญกับการอนุรักษ์และส่งเสริมภูมิปัญญาท้องถิ่นในการปลูกข้าว ซึ่งเป็นมรดกทางวัฒนธรรมอันล้ำค่าของไทย เราต้องการที่จะเป็นส่วนหนึ่งในการถ่ายทอดความรู้ และสร้างความภาคภูมิใจในข้าวไทยให้กับคนรุ่นใหม่ รวมถึงผู้บริโภคทั่วโลก
            </p>
            <p className="leading-relaxed text-gray-600">
              สุดท้าย พันธกิจของเราคือการสร้างความตระหนักรู้ให้กับผู้บริโภค เกี่ยวกับความสำคัญของข้าวไทย คุณภาพของผลผลิตจากชาวนาท้องถิ่น และผลกระทบเชิงบวกของการสนับสนุนผลิตภัณฑ์ของพวกเขา เราหวังว่าทุกการสั่งซื้อของคุณ จะเป็นการร่วมเดินทางไปกับเรา เพื่อสร้างอนาคตที่ยั่งยืนและมั่นคงให้กับชาวนาไทย และส่งมอบความสุขจากข้าวไทยแท้ๆ สู่ครัวของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="px-6 mb-20 md:px-12 lg:px-24">
        <h2 className="mb-8 text-xl font-semibold text-center text-gray-700 md:text-2xl lg:text-3xl md:mb-12">
          คะแนนจากผู้บริโภค
        </h2>
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-12 lg:gap-20">
          <div className="flex items-center justify-center mb-6 md:mb-0">
            <strong className="mr-4 text-4xl text-yellow-500 md:text-5xl">
              4.7
            </strong>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09 1.176-6.545L.587 5.905l6.545-.952L10 0l2.868 4.953 6.545.952-4.765 4.636L15.878 18.09z" />
                </svg>
              ))}
            </div>
            <span className="ml-4 text-lg text-gray-500">126 คะแนนรีวิว</span>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center">
              <span className="w-10 text-sm font-medium text-gray-600 md:text-base">
                5
              </span>
              <div className="w-2/3 h-3 mx-3 bg-gray-200 rounded-full md:h-4">
                <div className="w-5/6 h-3 bg-yellow-500 rounded-full md:h-4"></div>
              </div>
              <span className="w-10 text-sm text-right text-gray-500 md:text-base">
                83%
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-10 text-sm font-medium text-gray-600 md:text-base">
                4
              </span>
              <div className="w-2/3 h-3 mx-3 bg-gray-200 rounded-full md:h-4">
                <div className="w-1/2 h-3 bg-yellow-500 rounded-full md:h-4"></div>
              </div>
              <span className="w-10 text-sm text-right text-gray-500 md:text-base">
                57%
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-10 text-sm font-medium text-gray-600 md:text-base">
                3
              </span>
              <div className="w-2/3 h-3 mx-3 bg-gray-200 rounded-full md:h-4">
                <div className="w-1/3 h-3 bg-yellow-500 rounded-full md:h-4"></div>
              </div>
              <span className="w-10 text-sm text-right text-gray-500 md:text-base">
                32%
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-10 text-sm font-medium text-gray-600 md:text-base">
                2
              </span>
              <div className="w-2/3 h-3 mx-3 bg-gray-200 rounded-full md:h-4">
                <div className="w-1/4 h-3 bg-yellow-500 rounded-full md:h-4"></div>
              </div>
              <span className="w-10 text-sm text-right text-gray-500 md:text-base">
                21%
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-10 text-sm font-medium text-gray-600 md:text-base">
                1
              </span>
              <div className="w-2/3 h-3 mx-3 bg-gray-200 rounded-full md:h-4">
                <div className="w-1/6 h-3 bg-yellow-500 rounded-full md:h-4"></div>
              </div>
              <span className="w-10 text-sm text-right text-gray-500 md:text-base">
                15%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <h2 className="mb-8 text-xl font-semibold text-center text-gray-700 md:text-2xl lg:text-3xl">
          ความคิดเห็นจากลูกค้า
        </h2>
        <div className="md:flex md:flex-row md:gap-8 lg:gap-12 md:justify-center">
          {/* Mobile Slider */}
          <div className="relative mx-auto overflow-hidden rounded-lg shadow-sm md:hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full p-6">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute p-2 -translate-y-1/2 bg-gray-200 rounded-full opacity-75 left-2 top-1/2 hover:opacity-100"
            >
              {/* Left arrow icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 1.414L5.414 10l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7z" clipRule="evenodd" /></svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute p-2 -translate-y-1/2 bg-gray-200 rounded-full opacity-75 right-2 top-1/2 hover:opacity-100"
            >
              {/* Right arrow icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414-1.414L14.586 10 8.293 3.707a1 1 0 011.414-1.414l7 7a1 1 0 010 1.414l-7 7z" clipRule="evenodd" /></svg>
            </button>
          </div>

          {/* Render testimonial cards directly for desktop */}
          <div className="hidden max-w-screen-lg md:flex md:flex-row md:gap-8 lg:gap-12"> {/* Use md:block to show on larger screens */}
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="md:w-1/3">
                <TestimonialCard key={index} {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
