import React from 'react';
import { Button } from '@/components/ui/button';
import ButtonMain from '../components/ButtonMain';
import { X } from 'lucide-react';
import { Card } from '@/components/ui/card';

console.log('@/components/ui/button'); // เพิ่มบรรทัดนี้
console.log('Imported Button:', Button); // เพิ่มบรรทัดนี้เพื่อดูว่า import สำเร็จหรือไม่


const AccountContainer = () => {
    return (
      <main className="max-w-3xl border">
        <h1 className="hidden mb-4 text-4xl font-bold sm:block">
          บัญชีของฉัน
        </h1>
        <section>
          <h2 >
            ข้อมูลบัญชี
          </h2>
          
          <form >
            <input type="text" />
          </form>
          
          <div className="flex justify-center gap-4 my-8 sm:justify-start">
            <ButtonMain
                className={"w-auto"}
            >
                อัปเดตบัญชี
            </ButtonMain>
            <Button
                className="w-auto font-bold text-black border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 active:bg-gray-200 active:shadow-md"
            >
                <X className=" text-gray"/>
                ล้าง
            </Button>
          </div>
        </section>
        
        <div className="hidden mb-8 border-b sm:block"></div>
        
        <section>
            <h2 className="mb-4 text-2xl font-bold">
              เข้าสู่ระบบ
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                    <p className="mb-2 font-bold">รหัสผ่าน</p>
                    <p className="mb-2 text-sm text-gray-400 ">อัปเดตล่าสุดเมื่อ 1 เดือนที่แล้ว</p>
                </div>
                <div >
                    <Button
                        className="w-auto mb-8 font-bold text-black border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 active:bg-gray-200 active:shadow-md"
                    >
                        อัปเดตรหัสผ่าน
                    </Button>
                </div>
            </div>
        </section>
      </main>
    )
  }
  
  export default AccountContainer