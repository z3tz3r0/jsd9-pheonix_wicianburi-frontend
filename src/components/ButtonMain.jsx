import { Button } from "@/components/ui/button";
import React from 'react';

const ButtonMain = ({ onClick, children, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`w-full min-w-40 p-1 flex justify-center items-center text-center text-white font-bold bg-black rounded-full cursor-pointer hover:bg-black/90 active:shadow-md ${className}`}
    >
      {children}
    </Button>
  );
}

export default ButtonMain