import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import ButtonFirst from '../components/account/ButtonFirst';
import FormInputs from '../components/account/FormInputs';
import AccountLoading from '../containers/AccountLoading';

import { useEffect } from 'react';
import useAuth from '../context/useAuth';
import { updateCurrentUser } from '../services/userService';
//import { X } from 'lucide-react';


const Account = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  // console.log(isSubmitting);
  const { user, userLoading } = useAuth();
  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        street: user.address?.street,
        subDistrict: user.address?.subDistrict,
        district: user.address?.district,
        province: user.address?.province,
        postal: user.address?.postal,
      });
    }
  }, [user, reset]);

  const accountSubmit = async (data) => {
    try {
      const result = await updateCurrentUser(data);
      console.log('Update successful:', result);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <main className="px-4 mb-20 mr-4 sm:w-4xl">
      {userLoading || !user || !user?.address ? (
        <AccountLoading />
      ) : (
        <>
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
                  name="firstName"
                  type="text"
                  placeholder="ชื่อ"
                  validation={{ required: 'ชื่อจำเป็นต้องกรอก' }}
                  error={errors.firstName}
                />

                <FormInputs
                  register={register}
                  name="lastName"
                  type="text"
                  placeholder="นามสกุล"
                  validation={{ required: 'นามสกุลจำเป็นต้องกรอก' }}
                  error={errors.lastName}
                />

                <FormInputs
                  register={register}
                  name="phone"
                  type="tel"
                  placeholder="โทรศัพท์"
                  validation={{ required: 'เบอร์โทรศัพท์จำเป็นต้องกรอก', pattern: { value: /^[0-9]{10}$/, message: 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง (10 หลัก)' } }}
                  error={errors.phone}
                />

                <FormInputs
                  register={register}
                  name="email"
                  type="email"
                  placeholder="อีเมล"
                  validation={{ required: 'อีเมลจำเป็นต้องกรอก', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'รูปแบบอีเมลไม่ถูกต้อง' } }}
                  error={errors.email}
                />

                <FormInputs
                  register={register}
                  name="street"
                  type="text"
                  placeholder="ที่อยู่"
                  className="sm:col-span-2"
                  validation={{ required: 'ที่อยู่จำเป็นต้องกรอก' }}
                  error={errors.street}
                />

                <FormInputs
                  register={register}
                  name="subDistrict"
                  type="text"
                  placeholder="ตำบล"
                  validation={{ required: 'ตำบลจำเป็นต้องกรอก' }}
                  error={errors.subDistrict}
                />

                <FormInputs
                  register={register}
                  name="district"
                  type="text"
                  placeholder="อำเภอ"
                  validation={{ required: 'อำเภอจำเป็นต้องกรอก' }}
                  error={errors.district}
                />

                <FormInputs
                  register={register}
                  name="province"
                  type="text"
                  placeholder="จังหวัด"
                  validation={{ required: 'จังหวัดจำเป็นต้องกรอก' }}
                  error={errors.province}
                />

                <FormInputs
                  register={register}
                  name="postal"
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  validation={{ required: 'รหัสไปรษณีย์จำเป็นต้องกรอก', pattern: { value: /^[0-9]{5}$/, message: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง (5 หลัก)' } }}
                  error={errors.postal}
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
        </>
      )}
    </main>
  )
}

export default Account