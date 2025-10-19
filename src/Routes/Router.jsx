import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layout/HomeLayout";
import { Home } from "../components/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router;