import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import FaQ from "./components/FaQ";
import Coures from "./components/Coures";
import CoursesCard from "./components/CoursesCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <Blogs></Blogs>,
        },
        {
          path: "/faq",
          element: <FaQ></FaQ>,
        },
        {
          path: "/allproduct/:id",
          element: <CoursesCard></CoursesCard>,
          loader: ({ params }) =>fetch(`https://server-site-alamineimon.vercel.app/allproduct/${params.id}`),
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
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
