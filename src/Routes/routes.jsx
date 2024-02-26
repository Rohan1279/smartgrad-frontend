import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import GenericTemplate from "../Pages/GenericTemp/Temp1";
import Home from "../Pages/Home/Home";

const newRoute = [
  {
    path: "/joy",
  }
]

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
        element: <GenericTemplate />,
      },
      {
        path: "/*",
        element: <AboutUs />,
      },
      ...newRoute.map((route, index) => {
        return (
          {
            path: route.path,
            element: <GenericTemplate />,
          }
        );
      })
    ],
  },
]);
export default router;
