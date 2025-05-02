import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./containers/Layout";
import AuthProvider from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";
import AuthPage from "./modules/authPages/AuthPage";
import ForgetPassword from "./modules/authPages/ForgetPassword";
import AboutUs from "./pages/AboutUs";
import Account from "./pages/Account";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLayout from "./pages/Admin/AdminLayout";
import Cart from "./pages/Cart";
import ConfirmOrder from "./pages/ConfirmOrder";
import ConfirmPayment from "./pages/ConfirmPayment";
import ContactUs from "./pages/ContactUs";
import ContactUsDone from "./pages/ContactUsDone";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderDetail from "./pages/OrderDetail";
import OrderDone from "./pages/OrderDone";
import OrderHistory from "./pages/OrderHistory";
import ProductInfo from "./pages/ProductInfo";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "authpage", element: <AuthPage /> },
      { path: "authpage/:forgetpassword", element: <ForgetPassword /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:productId", element: <ProductInfo /> },
      { path: "contact", element: <ContactUs /> },
      { path: "contact/contactdone", element: <ContactUsDone /> },

      {
        path: "profile",
        element: <Profile />,
        children: [
          { index: true, element: <Account /> },
          { path: "order-history", element: <OrderHistory /> },
          { path: "order-history/:orderId", element: <OrderDetail /> },
        ]
      },
      { path: "/cart", element: <Cart /> },
      { path: "/cart/confirm-order", element: <ConfirmOrder /> },
      { path: "/cart/confirm-order/confirm-payment", element: <ConfirmPayment /> },
      { path: "/cart/confirm-order/confirm-payment/order-done", element: <OrderDone /> },
      { path: "*", element: <NotFound /> },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> }
    ]
  }
]);

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
