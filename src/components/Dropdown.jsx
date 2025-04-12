import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import * as React from 'react';


export default function Dropdown({ label, children, className }) {
    return (
        <Select>
            <SelectTrigger className={className}>
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
                {children}
            </SelectContent>
        </Select>

    );
}