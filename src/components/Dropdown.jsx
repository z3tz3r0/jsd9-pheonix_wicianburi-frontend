import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import * as React from 'react';

export default function Dropdown({ id, label, children, size, className }) {
    const [select, setSelect] = React.useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    return (
        <>
            <InputLabel id={id} size={size}>{label}</InputLabel>
            <Select
                size={size}
                className={className}
                labelId={id}
                id={id}
                value={select}
                label={label}
                onChange={handleChange}
            >
                {/* 
                    ให้ใช้ MenuItem เซ็ตค่า value ด้วย
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    */}
                {children}
            </Select>
        </>

    );
}