import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormInputs = ({ register,name,type,placeholder,className }) => {
  return (
    <div className={className}>
        <Label className="mb-2">{name}</Label>
        <Input 
        {...register(name)}
        type={type} 
        placeholder={placeholder} 
        />
    </div>
  )
}

export default FormInputs