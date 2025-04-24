import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import React from "react";

const ButtonGoogle = ({ className = "", onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="default"
      size="icon"
      className={`w-12 h-12 rounded-full border border-gray-300 bg-(--primary) hover:bg-gray-100 ${className} cursor-pointer`}
    >
      <FcGoogle className="text-xl" />
    </Button>
  );
};

export default ButtonGoogle;
