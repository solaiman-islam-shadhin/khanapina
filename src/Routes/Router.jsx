import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layout/HomeLayout";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Purchase } from "../components/pages/Purchase";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "purchase",
                Component: Purchase
            }
        ]
    }
])

export default router;