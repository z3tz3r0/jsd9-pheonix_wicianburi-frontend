import { Button } from "@/components/ui/button";
import React from 'react';

const ButtonMain = ({ children, className }) => {
    return (
        <Button
            className={`w-full font-bold bg-black rounded-full cursor-pointer hover:bg-black/90 active:shadow-md ${className}`}
        >
            {children}
        </Button>
    );
}

export default ButtonMain