import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";
import Error from "../pages/Error.jsx";
import Registration from "../pages/Registration.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import AllProducts from "../pages/AllProducts.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
