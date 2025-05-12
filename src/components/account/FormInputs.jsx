import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormInputs = ({ register, name, type, placeholder, validation = {}, className, error }) => {

  return (

    <div className={className}>
      <Label className="mb-2">{placeholder}</Label>
      <Input
        {...register(name, { ...validation })}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  )
}

export default FormInputs