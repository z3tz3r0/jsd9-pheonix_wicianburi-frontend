import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./containers/Layout";
import AboutUs from "./pages/AboutUs";
import Account from "./pages/Account";
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
import { CartProvider } from "./CartApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:category", element: <ProductList /> },
      { path: "products/:productId", element: <ProductInfo /> },
      { path: "contact", element: <ContactUs /> },
      { path: "contact/contactDone", element: <ContactUsDone />},

      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "account", element: <Account /> },
          { path: "order-history", element: <OrderHistory /> },
          { path: "order-history/:orderId", element: <OrderDetail /> },
        ]
      },
      { path: "profile/cart", element: <Cart />},
      { path: "profile/cart/confirm-order", element: <ConfirmOrder />},
      { path: "profile/cart/confirm-order/confirm-payment", element: <ConfirmPayment />},
      { path: "profile/cart/confirm-order/confirm-payment/order-done", element: <OrderDone />},
      { path: "*", element: <NotFound /> },
    ]
  },
]);

function App() {

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
