import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom"
import Root from "./routes/root"
import Home from "./pages/home/Home";
import Detail from "./pages/details/Detail";
import Page404 from "./pages/page404/Page404";
import Favorites from "./pages/favorites/Favorite"

const router = createHashRouter([
  {
    "path":"/",
    "element":<Root/>,
    "errorElement":<Page404/>,
    "children":[
      {
        "path":"/",
        "element":<Home/>,
      },
      {
        "path":"detail/:id",
        "element":<Detail/>
      },
      {
        "path":"filter/:filter",
        "element":<Home/>
      },
      {
        "path":"favorites/:ids",
        "element":<Favorites/>
      },
    ]
  }
])

// eslint-disable-next-line function-paren-newline
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
// eslint-disable-next-line function-paren-newline
);