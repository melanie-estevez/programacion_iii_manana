import { Home } from "../pages/public/Home";

import PublicLayout from "../layouts/PublicLayout";
import type { RouteObject } from "react-router-dom";
import { PostDetail } from "../pages/private/PostDetail";

export const publicRoutes: RouteObject = {
  path: "/",
  element: <PublicLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "post/:id", element: <PostDetail /> },
  ],
};