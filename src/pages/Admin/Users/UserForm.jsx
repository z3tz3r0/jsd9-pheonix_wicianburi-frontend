import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const userFormSchema = z.object({
  firstName: z.string().min(1, { message: "กรุณากรอกชื่อจริง" }),
  lastName: z.string().min(1, { message: "กรุณากรอกนามสกุล" }),
  email: z.string().email({ message: "กรุณากรอกอีเมลที่ถูกต้อง" }),
  password: z.string().min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }).optional(), // Password can be optional for editing
  phone: z.string().min(10, { message: "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง" }).optional(),
  address: z.object({
    street: z.string().optional(),
    subDistrict: z.string().optional(),
    district: z.string().optional(),
    province: z.string().optional(),
    postal: z.number().optional(),
  }).optional(),
  isMember: z.boolean().default(false).optional(),
  isVerified: z.boolean().default(false).optional(),
});

const UserForm = ({ onSubmit, initialData }) => {
  const form = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: initialData || {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      address: {
        street: '',
        subDistrict: '',
        district: '',
        province: '',
        postal: undefined,
      },
      isMember: false,
      isVerified: false,
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อจริง</FormLabel>
              <FormControl>
                <Input placeholder="ชื่อจริง" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>นามสกุล</FormLabel>
              <FormControl>
                <Input placeholder="นามสกุล" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>อีเมล</FormLabel>
              <FormControl>
                <Input placeholder="อีเมล" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password field only for adding user, or if explicitly needed for editing */}
        {!initialData && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รหัสผ่าน</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="รหัสผ่าน" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>เบอร์โทรศัพท์</FormLabel>
              <FormControl>
                <Input placeholder="เบอร์โทรศัพท์" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Address fields - simplified for now */}
        <h4 className="mt-4 font-semibold text-md">ที่อยู่</h4>
        <FormField
          control={form.control}
          name="address.street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ถนน/หมู่บ้าน</FormLabel>
              <FormControl>
                <Input placeholder="ถนน/หมู่บ้าน" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.subDistrict"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ตำบล/แขวง</FormLabel>
              <FormControl>
                <Input placeholder="ตำบล/แขวง" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>อำเภอ/เขต</FormLabel>
              <FormControl>
                <Input placeholder="อำเภอ/เขต" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.province"
          render={({ field }) => (
            <FormItem>
              <FormLabel>จังหวัด</FormLabel>
              <FormControl>
                <Input placeholder="จังหวัด" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address.postal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>รหัสไปรษณีย์</FormLabel>
              <FormControl>
                <Input type="number" placeholder="รหัสไปรษณีย์" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isMember"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  เป็นสมาชิก
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isVerified"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  ยืนยันแล้ว
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit">บันทึก</Button>
      </form>
    </Form>
  );
};

export default UserForm;