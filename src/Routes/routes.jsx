import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Temp1 from "../Pages/GenericTemp/Temp1";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/temp1",
        element: <Temp1 />,
      },
      {
        path: "/*",
        element: <AboutUs />,
      },
    ],
  },
]);
export default router;
