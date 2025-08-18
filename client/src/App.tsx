import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Create from "./pages/Create";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "create",
        element: <Create />
      },
      {
        path: "product/:id",
        element: <ProductPage />
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
