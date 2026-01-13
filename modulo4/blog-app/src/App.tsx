import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  <>
 
  <Route path="post/:id" element={<PostDetail />} />
  return <>{routes}</>;
  </>
}