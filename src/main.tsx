import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from "./routes/root"
import Home from "./pages/home/Home";
import Detail from "./pages/details/Detail";
import Page404 from "./pages/page404/Page404";

const router = createBrowserRouter([
  {
    "path":"/",
    "element":<Root/>,
    "errorElement":<Page404/>,
    "children":[
      {
        "path":"/",
        "element":<Home/>
      },
      {
        "path":"detail/:id",
        "element":<Detail/>
      }
    ]
  }
])

// eslint-disable-next-line function-paren-newline
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <CssBaseline/>
      <RouterProvider router={router} />
    </React.StrictMode>
// eslint-disable-next-line function-paren-newline
);