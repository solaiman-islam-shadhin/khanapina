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
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { NotFound } from "../components/pages/NotFound";
import { Reviews } from "../components/pages/Reviews";
import { CustomerOrders } from "../components/pages/CustomerOrders";


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
                element: <PrivateRoute><Purchase /></PrivateRoute>
            },
            {
                path: "add-food",
                element: <PrivateRoute><AddFood /></PrivateRoute>
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
                path: "reviews",
                Component: Reviews
            },
            {
                path: "food/:id",
                Component: Food
            },
            {
                path: "my-foods",
                element: <PrivateRoute><MyFood /></PrivateRoute>
            },
            {
                path: "my-orders",
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: "customer-orders",
                element: <PrivateRoute><CustomerOrders /></PrivateRoute>
            },
            {
                path: "*",
                Component: NotFound
            }
            
        ]
    }
])

export default router;