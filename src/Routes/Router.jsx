import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../layout/HomeLayout";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Purchase } from "../components/pages/Purchase";
import { AddFood } from "../components/pages/AddFood";
import { Gallery } from "../components/pages/Gallery";
import { Food } from "../components/pages/Food";
import { MyFood } from "../components/pages/MyFood";
import { MyOrders } from "../components/pages/MyOrders";
import { AllFoods } from "../components/pages/AllFoods";


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
                path: "purchase/:id",
                Component: Purchase
            },
            {
                path: "add-food",
                Component: AddFood
            },
            {
                path: "all-foods",
                Component: AllFoods
            },
            {
                path: "gallery",
                Component: Gallery
            },
            {
                path: "food/:id",
                Component: Food
            },
            {
                path: "my-foods",
                Component: MyFood
            },
            {
                path: "my-orders",
                Component: MyOrders
            },
            
        ]
    }
])

export default router;