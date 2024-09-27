import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import App from "./App";
import ErrorPage from "./pages/Error";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portforlio";

import Resume from "./pages/Resume";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Resume", element: <Resume /> },
    ],
  },
];

const router = createBrowserRouter(routerConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
