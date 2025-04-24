import React from 'react'
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';


const ButtonFirst = ({ text, className, type, isPending }) => {
  return (
    <Button
    type={type}
    className={`w-auto font-bold bg-black rounded-full cursor-pointer hover:bg-black/90 active:shadow-md ${className}`}
    >
        {
            isPending ? <><RefreshCw className="animate-spin"/><span>{text}</span></> : <p>{text}</p>
        }
    </Button>
  )
}

export default ButtonFirst