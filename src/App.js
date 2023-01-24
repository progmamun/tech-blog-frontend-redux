import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { getBlogsThunk } from "./redux/thunks/blogThunk";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsThunk());
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
