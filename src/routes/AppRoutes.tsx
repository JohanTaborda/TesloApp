import { lazy } from "react"
import {createBrowserRouter, Navigate} from "react-router"

//Components Shop
import ShopLayout from "@/layouts/shopLayouts/ShopLayout"
import HomePage from "@/modules/shopModule/home/HomePage"
import ProductPage from "@/modules/shopModule/product/ProductPage"
import GenderPage from "@/modules/shopModule/gender/GenderPage"

//Components Auth
import LoginPage from "@/modules/authModule/login/LoginPage"
import RegisterPage from "@/modules/authModule/register/RegisterPage"

//Components Admin
import AdminDashboardPage from "@/modules/adminModule/dashboard/AdminDashboardPage"
import AdminProductPage from "@/modules/adminModule/product/AdminProductPage"
import AdminProductsPage from "@/modules/adminModule/products/AdminProductsPage"

const AuthLayout = lazy(() => import("@/layouts/authLayouts/AuthLayout")) // -> Carga Diferida Auth.
const AdminLayout = lazy(() => import("@/layouts/adminLayouts/AdminLayout")) // -> Carga Diferida Admin.

export const AppRoutes = createBrowserRouter([
    // Public and Mains routes
    {
        path: "/",
        element: <ShopLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:"product/:id",
                element: <ProductPage/>
            },
            {
                path: "gender/:gender",
                element: <GenderPage/>
            }
        ]
    },

    // Auth Routes
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={"/auth/login"}/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <RegisterPage/>
            }
        ]
    },

    // Admin Routes
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
               index:true,
               element: <AdminDashboardPage/>
            },
            {
               path: "product/:id",
               element: <AdminProductPage/>
            },
            {
               path: "products",
               element: <AdminProductsPage/>
            }
        ]
    },

    // Default Route
    {
        path:"*",
        element: <Navigate to={"/"}/>
    }

])