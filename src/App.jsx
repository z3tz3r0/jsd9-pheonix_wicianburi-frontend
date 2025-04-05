import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./containers/Layout";
import AboutUs from "./pages/AboutUs";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderDetail from "./pages/OrderDetail";
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
      { path: "products", element: <ProductList /> },
      { path: "products/:productId", element: <ProductInfo /> },
      { path: "contact", element: <ContactUs /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "account", element: <Account /> },
          { path: "order-history", element: <OrderHistory /> },
          { path: "order-history/:orderId", element: <OrderDetail /> },
        ]
      },
      { path: "profile/cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
