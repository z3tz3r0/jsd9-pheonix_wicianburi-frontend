// ใช้ useCart เป็นค่า CartContext 

import { useContext } from "react";
import { CartContext } from "./CartContext";

const useCart = () => useContext(CartContext);

export default useCart;