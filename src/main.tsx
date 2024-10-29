import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainPage } from "./components/MainPage/MainPage.tsx"
import { LoginPage } from "./components/LoginPage/LoginPage.tsx"
import { SignUpPage } from "./components/SignUpPage/SignUpPage.tsx"
import { ProfilePage } from "./components/ProfilePage/ProfilePage.tsx"
import { ProductPage } from "./components/ProductPage/ProductPage.tsx"
import { MainLayout } from "./components/MainLayout/MainLayout.tsx"
import { CreateProduct } from "./components/CreateProduct/CreateProduct.tsx"
import { AuthenticatedRoute } from "./components/ProtectedRoutes/AuthenticatedRoute.tsx"
import { AdminRoute } from "./components/ProtectedRoutes/AdminRoute.tsx"
import { UnAuthenticatedRoute } from "./components/ProtectedRoutes/UnAuthenticatedRoute.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
  /*Routes only Accesible without login*/
  {
    element: <UnAuthenticatedRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
  /*Routes only Accesible for logged users*/
  {
    element: <AuthenticatedRoute />,
    children: [
      {
        path: "/profile",
        element: (
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        ),
      },
    ],
  },
  /*Routes only Accesible for admin users*/
  {
    element: <AdminRoute />,
    children: [
      {
        path: "/create-product",
        element: (
          <MainLayout>
            <CreateProduct />
          </MainLayout>
        ),
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
