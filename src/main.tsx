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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <ProfilePage />
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
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
