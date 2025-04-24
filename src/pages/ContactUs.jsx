import { Input } from "@/components/ui/input";
import { SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router";
import ButtonMain from '../components/ButtonMain';
import Dropdown from '../components/Dropdown';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const topicOptions = {
    product_inquiry: 'สอบถามเกี่ยวกับสินค้า',
    website_issue: 'ปัญหาการใช้งานเว็บไซต์',
    order_status: 'ติดตามสถานะคำสั่งซื้อ',
    feedback_complaint: 'ข้อเสนอแนะ/ร้องเรียน',
    other: 'อื่น ๆ'
}


const ContactUs = () => {
    const form = useRef();
    const [topic, setTopic] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            name: name,
            email: email,
            topic: topic,
            topic_text: topicOptions[topic] || topic, // Send the display text
            message: message,
        };

        console.log("Submitting contact form data: ", templateParams);

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            { publicKey: EMAILJS_PUBLIC_KEY, }
        ).then((result) => {
            console.log('EmailJS Success: ', result.text);
            // Clear form fields after successful submission (optional)
            setName('');
            setEmail('');
            setTopic('');
            setMessage('');
            navigate('/contact/contactDone');
        }).catch((error) => {
            console.error('EmailJS Error: ', error);
            alert("เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง");
        }).finally(() => {
            setIsSubmitting(false);
        })
    };

    return (
        <section className='grid items-center sm:grid-cols-2 sm:min-h-[80dvh] md:pl-20 md:max-w-7xl md:justify-self-center'>
            <div className="flex flex-col justify-center gap-8 p-8">
                <h1 className='text-4xl font-bold'>ติดต่อเรา</h1>
                <p>กรุณาเลือกหัวข้อที่ต้องการติดต่อ พร้อมเพิ่มรายละเอียดที่ต้องการให้เราช่วยเหลือได้เลย</p>
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Dropdown
                        label="หัวข้อที่ต้องการติดต่อ"
                        value={topic}
                        onValueChange={setTopic}
                        className="w-full px-4 py-6 text-base"
                    >
                        <SelectGroup>
                            <SelectLabel>หัวข้อ</SelectLabel>
                            {Object.entries(topicOptions).map(([value, label]) => (
                                <SelectItem key={value} value={value}>{label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </Dropdown>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Input
                            className="px-4 py-6"
                            type="text"
                            value={name}
                            placeholder="ชื่อ"
                            disabled={isSubmitting}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            className="px-4 py-6"
                            type="email"
                            value={email}
                            placeholder="อีเมล"
                            disabled={isSubmitting}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Textarea
                        value={message}
                        placeholder="กรุณาพิมพ์ข้อความ"
                        className="px-4"
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={isSubmitting}
                        required
                    />
                    <ButtonMain type="submit" className="p-6 mt-8 mb-16 sm:w-40">{isSubmitting ? `กำลังส่งข้อความ` : `ส่งข้อความเลย`}</ButtonMain>
                </form>
            </div>

            {/* Map Section */}
            <div className="mb-16 aspect-square sm:pr-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7960399139397!2d100.3336095!3d13.7911655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e293b2208cdc3d%3A0x9b86a084fc548c44!2zRCBLb21tdW5lIOC4lOC4tSDguITguK3guKHguKHguLnguYDguJksIFNwYWNlICYgVGFwcm9vbQ!5e0!3m2!1sth!2sth!4v1744528507988!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </section>
    )
}

export default ContactUs