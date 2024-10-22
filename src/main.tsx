import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainPage } from "./components/MainPage/MainPage.tsx"
import { LoginPage } from "./components/LoginPage/LoginPage.tsx"
import { SignUpPage } from "./components/SignUpPage/SignUpPage.tsx"
import { ProfilePage } from "./components/ProfilePage/ProfilePage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
    element: <ProfilePage />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
