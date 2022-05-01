import { Navigate } from "react-router-dom";
import { CategoryContent } from "../pages/CategoryContent";
import { Main } from "../pages/Main";

export const PATH_MAIN = "/main"
export const PATH_CATEGORY = "/technology/"

export const publicRoutes = [
  {
    path: PATH_MAIN,
    element: <Main />,
  },
  {
    path: PATH_CATEGORY + ":catId",
    element: <CategoryContent />
  },
  {
    path: '*',
    element: <Navigate to={PATH_MAIN} replace={true} />
  },
]