import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Presupuesto from "./components/Presupuesto";
import Servicios from "./components/Servicios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/presupuestos",
    element: <Presupuesto />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
