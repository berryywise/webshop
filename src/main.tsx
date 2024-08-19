import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/homepage/Home.tsx";
import ErrorPage from "./components/misc/ErrorPage.tsx";
import About from "./components/about/About.tsx";
import Contact from "./components/contact/Contact.tsx";
import Cart from "./components/cart/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
