import React from 'react'
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const TextAreaInput = ({ register,name,type,placeholder }) => {
  return (
    <div>
        <Label className="mb-2">{name}</Label>
        <Textarea 
        {...register(name)}
        rows={5}
        type={type} 
        placeholder={placeholder} />
    </div>
  )
}

export default TextAreaInput