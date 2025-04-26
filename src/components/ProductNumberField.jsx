// Number Field
// A numeric input element with increment and decrement buttons, and a scrub area.

import { NumberField } from '@base-ui-components/react/number-field';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import * as React from 'react';

export default function ProductNumberField({ productAmount, setProductAmount }) {
  const id = React.useId();
  return (
    <NumberField.Root id={id} min={1} value={productAmount} onValueChange={setProductAmount} className="flex items-center">

      <NumberField.Group className='flex h-8 gap-2'>
        <NumberField.Decrement className='w-8 rounded-[12px] bg-[#F1F4F3] cursor-pointer'>
          <RemoveIcon />
        </NumberField.Decrement>

        <NumberField.Input className='w-8 h-full text-center focus:outline-none' />

        <NumberField.Increment className='w-8 rounded-[12px] bg-[#F1F4F3] cursor-pointer'>
          <AddIcon />
        </NumberField.Increment>

      </NumberField.Group>
    </NumberField.Root>
  );
}