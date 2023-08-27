import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Address from "./Pages/Address";
import Profile from "./Pages/Profile";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Address />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Dashboard",
        element: <Profile />,
      },
     
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);