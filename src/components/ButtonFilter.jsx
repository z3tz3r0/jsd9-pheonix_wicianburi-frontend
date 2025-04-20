import { Button } from "@/components/ui/button";
import React from 'react';
import { Link } from "react-router";

const ButtonFilter = ({ children, className }) => {
    return (
        <Link to="" >
            <Button
                className={`w-full font-semibold bg-[#01c9ac] rounded-full cursor-pointer sm:text-2xl sm:p-6 hover:bg-black/90 active:shadow-md ${className}`}        >
                {children}
            </Button>
        </Link>
    );
}

export default ButtonFilter