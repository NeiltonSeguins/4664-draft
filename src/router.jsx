import { createBrowserRouter } from "react-router";
import App from "./App";
import Signup from "./components/SignUp";
import Signin from "./components/SignIn";
import Home from "./routes/Home";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
]);
