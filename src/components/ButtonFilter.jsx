import { Button } from "@/components/ui/button";
import React from 'react';
import { Link } from "react-router";

const ButtonFilter = ({ children, className, onClick }) => {
  return (
    // <Link key={category} to={`/products/${category}`}>
    <Link to="products" >
      <Button
        className={`w-full font-semibold bg-[#01c9ac] rounded-full cursor-pointer sm:text-2xl sm:p-6 hover:bg-black/90 active:shadow-md ${className}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
}

export default ButtonFilter