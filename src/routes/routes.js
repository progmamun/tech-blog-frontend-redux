import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogList from "../pages/Dashboard/BlogList";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";
import Blog from "../pages/Main/Blog";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";
import TopRated from "../pages/Main/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "reading-history",
        element: <ReadingHistory />,
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "update-blog/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default routes;
