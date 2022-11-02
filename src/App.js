import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import FaQ from "./components/FaQ";
import Coures from "./components/Coures";
import CoursesCard from "./components/CoursesCard";
import SinggleCard from "./components/SinggleCard";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {


const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
};


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/blogs",
          element: <FaQ></FaQ>,
        },
        {
          path: "/allproduct/:id",
          element: <CoursesCard></CoursesCard>,
          loader: ({ params }) =>
            fetch(
              `https://server-site-alamineimon.vercel.app/allproduct/${params.id}`
            ),
        },
        {
          path: "/userAccess/:id",
          element: (
            <PrivateRoute>
              <SinggleCard></SinggleCard>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://server-site-alamineimon.vercel.app/allproduct/${params.id}`
            ),
        },
        {
          path: "/allproduct",
          element: <Coures></Coures>,
          loader: () => fetch("https://server-site-alamineimon.vercel.app"),
        },
      ],
    },
  ]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme }}>
      <div id={theme}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
