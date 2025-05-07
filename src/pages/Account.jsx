import React  from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import FormInputs from '../components/account/FormInputs';
import ButtonFirst from '../components/account/ButtonFirst';
//import { X } from 'lucide-react';


const Account = () => {

  const { register, handleSubmit, formState }= useForm();
  const { isSubmitting } = formState;
  console.log(isSubmitting);


  const accountSubmit = async(data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

    return (
      <main className="px-4 mb-20 mr-4 sm:w-4xl">
        <h1 className="hidden mb-8 text-4xl font-bold sm:block">
          บัญชีของฉัน
        </h1>
        <section>
          <h2 className="mb-8">
            ข้อมูลบัญชี
          </h2>

          <form onSubmit={handleSubmit(accountSubmit)}>
            <div className="grid gap-4 mb-8 sm:grid-cols-2">
              <FormInputs
                register={register}
                name="ชื่อ"
                type="text"
                placeholder="ชื่อ"
              />

              <FormInputs
                register={register}
                name="นามสกุล"
                type="text"
                placeholder="นามสกุล"
              />

              <FormInputs
                register={register}
                name="โทรศัพท์"
                type="tel"
                placeholder="โทรศัพท์"
              />

              <FormInputs
                register={register}
                name="อีเมล"
                type="email"
                placeholder="อีเมล"
              />

              <FormInputs
                register={register}
                name="ที่อยู่"
                type="text"
                placeholder="ที่อยู่"
                className="sm:col-span-2"
              />

              <FormInputs
                register={register}
                name="ตำบล"
                type="text"
                placeholder="ตำบล"
              />

              <FormInputs
                register={register}
                name="อำเภอ"
                type="text"
                placeholder="อำเภอ"
              />

              <FormInputs
                register={register}
                name="จังหวัด"
                type="text"
                placeholder="จังหวัด"
              />

              <FormInputs
                register={register}
                name="รหัสไปรษณีย์"
                type="text"
                placeholder="รหัสไปรษณีย์"
              />
            </div>

            <div className="flex justify-center gap-4 my-8 sm:justify-start">
              <ButtonFirst
              text="อัปเดตบัญชี"
              type="submit"
              isPending={isSubmitting}
              />

            </div>
          </form>
        </section>

        <div className="hidden mb-8 border-b sm:block"></div>

        <section >
            <h2 className="mb-4 text-2xl font-bold">
              เข้าสู่ระบบ
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                    <p className="mb-2 font-bold">รหัสผ่าน</p>
                    <p className="mb-2 text-sm text-gray-400 ">อัปเดตล่าสุดเมื่อ 1 เดือนที่แล้ว</p>
                </div>
                <div className='flex justify-center'>
                  <Button
                    className="w-auto font-bold text-black border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 active:bg-gray-200 active:shadow-md"
                  >
                    อัปเดตรหัสผ่าน
                  </Button>
                </div>
            </div>
        </section>
      </main>
    )
  }

  export default Account