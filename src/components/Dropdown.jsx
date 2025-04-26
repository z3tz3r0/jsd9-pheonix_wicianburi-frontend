import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import * as React from 'react';


export default function Dropdown({ label, children, className, value, onValueChange }) {
  return (
    <Select value={value} onValueChange={onValueChange} required>
      <SelectTrigger className={className}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>

  );
}

// วิธีใช้
// const [selectedValue, setSelectedValue] = useState('');  Example state in parent

{/* <Dropdown
    label="กรุณาเลือกปริมาณ"
    className="w-3/5"
    value={selectedValue} // Pass state value
    onValueChange={setSelectedValue} // Pass state setter
>
        <SelectGroup>
            <SelectLabel>ปริมาณ</SelectLabel>
            <SelectItem value={1}>1 กิโลกรัม</SelectItem>
            <SelectItem value={5}>5 กิโลกรัม</SelectItem>
        </SelectGroup>
    </Dropdown> */}