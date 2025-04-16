import { Button } from "@/components/ui/button";
import { TfiFacebook } from "react-icons/tfi";
import React from "react";

const ButtonFacebook = ({ className = "", onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="default"
      size="icon"
      className={`w-12 h-12 rounded-full border border-gray-300 bg-(--primary) hover:bg-gray-100 ${className} cursor-pointer`}
    >
      <TfiFacebook className="text-xl" style={{ color: "var(--facebook-blue)"}} />
    </Button>
  );
};

export default ButtonFacebook;
