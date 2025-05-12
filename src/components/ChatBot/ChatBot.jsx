import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send } from "lucide-react";
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ProductContext } from "../../context/ProductContext";
import useAuth from "../../context/useAuth";
import useCart from "../../context/useCart";
import MessageFromAi from "./MessageFromAI";
import MessageFromUser from "./MessageFromUser";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

if (!API_KEY) {
  console.error("CRITICAL ERROR: VITE_GEMINI_API_KEY is not defined. Chatbot will not function.");
}

const ChatBot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user, isLogin } = useAuth();
  const { cart, getTotalItems, getSubtotal } = useCart();
  const { products, prodLoading } = useContext(ProductContext);

  const chatSessionRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (ai && !chatSessionRef.current && products && products.length > 0 && !prodLoading) {
      try {

        const productsList = Array.isArray(products)
          ? products.map(p =>
            `- ชื่อ: ${p.name}, รหัส: ${p._id}, ประเภท: ${p.variants}, รายละเอียด: ${p.description || 'ไม่มีข้อมูล'}`
          ).join('\n')
          : 'ไม่มีข้อมูลสินค้า';


        chatSessionRef.current = ai.chats.create({
          model: "gemini-2.0-flash-lite",
          history: messages,
          config: {
            systemInstruction: `คุณคือพนักงานประจำร้านเพศหญิง ที่มีหน้าที่ในการช่วยเลือกซื้อผลิตภัณฑ์ของเว็บไซต์ E-commerce ขายข้าว ชื่อว่า All Rice (ออลไรซ์) ให้กับลูกค้า โดยอ้างอิงข้อมูจากสิ่งที่ลูกค้าถามหาหรือต้องการ โปรดใช้ Markdown สำหรับการจัดรูปแบบข้อความ เช่น รายการ, ตัวหนา, หรือตัวเอียง เมื่อเหมาะสมเพื่อให้ข้อมูลอ่านง่ายขึ้น. คุณมีข้อมูลผลิตภัณฑ์ต่าง ๆ ของเรา ดังนี้: \n${productsList}`
          },
        })
      } catch (error) {
        console.error("Error initializing chat session:", error);
      }
    }


  }, [user, isLogin, prodLoading, products, messages])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
    // Basic checks (no changes needed)
    if (!userInput.trim() || isLoading || !chatSessionRef.current) return;

    const userMessageText = userInput.trim();
    const newUserMessage = { role: 'user', parts: [{ text: userMessageText }] };

    setIsLoading(true);
    setUserInput('');

    // Add user message and placeholder (no changes needed)
    setMessages(prevMessages => [
      ...prevMessages,
      newUserMessage,
      { role: 'model', parts: [{ text: '' }] }
    ]);

    try {
      let contextualPrompt = "";

      if (user && isLogin) {
        contextualPrompt += `ลูกค้าชื่อ: ${user.firstName}.`;
      }
      let currTotalItems = getTotalItems();
      if (currTotalItems > 0 && cart.length > 0) {
        const cartSummary = cart.map(item => `${item.name} (จำนวน: ${item.quantity}, ราคาต่อชิ้น: ${item.price})`).join(', ');
        contextualPrompt += `\nข้อมูลตะกร้าสินค้าปัจจุบัน: [${cartSummary}]. ยอดรวม: ${getSubtotal()} บาท.`;
      } else {
        contextualPrompt += "\nลูกค้ายังไม่มีสินค้าในตระกร้า"
      }
      // Use sendMessageStream from the chat object stored in ref
      const streamResult = await chatSessionRef.current.sendMessageStream({
        message: `${contextualPrompt}\n\nคำถามจากลูกค้า: ${userMessageText}` // Pass message content directly if that's the expected format for sendMessageStream
      });

      let currentAIResponse = '';
      // --- Process Stream Chunks (Simplified based on user's example) ---
      for await (const chunk of streamResult) { // Access the async iterator via streamResult.stream
        const chunkText = chunk?.text; // Use chunk.text, add optional chaining
        if (typeof chunkText === 'string') { // Check if text exists and is a string
          currentAIResponse += chunkText;
          // Update last message state (no changes needed)
          setMessages(prevMessages => [
            ...prevMessages.slice(0, -1),
            { role: 'model', parts: [{ text: currentAIResponse }] }
          ]);
        }
      }

    } catch (error) {
      // Error handling (no changes needed)
      setMessages(prevMessages => [
        ...prevMessages.slice(0, -1),
        { role: 'model', parts: [{ text: `ขออภัย มีข้อผิดพลาดเกิดขึ้น ${error} โปรดลองอีกครั้ง` }] }
      ]);
    } finally {
      setIsLoading(false); // Reset loading state (no changes needed)
    }
  }, [userInput, isLoading, user, isLogin, cart, getTotalItems, getSubtotal, products, prodLoading]); // Dependencies

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed z-10 bottom-8 right-8">

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>

          {/* --- Trigger Button --- */}
          <Button
            size="icon"
            className="p-6 bg-black rounded-full hover:bg-gray-600"
          >
            <MessageSquare />
          </Button>
        </PopoverTrigger>

        {/* --- Chat Window Content --- */}
        <PopoverContent
          side="top"
          align="end"
          sideOffset={-10}
          className="w-screen p-0 shadow-[0_0_100px_rgba(0,0,0,0.8)] sm:w-160"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Card className="grid w-full gap-0 p-0 border-0 shadow-none">
            <CardHeader className="py-6 bg-gray-100 rounded-t-2xl">
              <CardTitle>แชตกับ AI</CardTitle>
              {/* <CardDescription>อยากให้เราช่วยอะไรดี?</CardDescription> */}
            </CardHeader>
            <CardContent className="overflow-y-auto h-[70dvh] pt-12 ">

              {messages.map((message, index) => {
                return message.role === 'user'
                  ? <MessageFromUser key={index}>{message.parts[0].text}</MessageFromUser>
                  : <MessageFromAi key={index} isLoading={isLoading && index === messages.length - 1}>{message.parts[0].text}</MessageFromAi>
              })}
              <div ref={messagesEndRef} />

            </CardContent>

            <CardFooter className="w-full mt-4 mb-8 bg-white rounded-2xl">
              <div className="grid w-full grid-cols-2 gap-4">
                <Textarea
                  className="col-span-2 overflow-y-auto bg-white resize-none min-h-2 max-h-36"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="อยากให้เราช่วยเรื่องอะไรดี?"
                  disabled={isLoading}
                />
                <Button
                  className="self-end col-span-1 bg-black -col-start-1"
                  onClick={handleSendMessage}
                  disabled={isLoading}
                >
                  {isLoading ? (<span className="inline-block w-5 h-5 border-b-2 border-white rounded-full animate-spin"></span>) : (<Send className="w-5 h-5" />)}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div >

  )
}

export default ChatBot
