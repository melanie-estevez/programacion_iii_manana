
import type { RouteObject } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import { Home } from "@mui/icons-material";
import { PostDetail } from "../pages/private/PostDetails";

export const publicRoutes: RouteObject = {
  path: "/",
  element: <PublicLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "post/:id", element: <PostDetail /> },
  ],
};