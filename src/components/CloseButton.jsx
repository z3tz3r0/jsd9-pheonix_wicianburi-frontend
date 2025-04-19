import { GrClose } from "react-icons/gr";

const CloseButton = ({ onClick, isSignUp }) => {
  return (
    <GrClose
      onClick={onClick}
      className={`
        absolute top-4
        left-4
        cursor-pointer
        z-50
        transition-all duration-10

        sm:top-4
        ${isSignUp ? "sm:left-auto sm:right-4" : "sm:left-4 sm:right-auto"}
      `}
    />
  );
};

export default CloseButton;
