import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/Error/Error.jsx";
import HomePage from "../pages/Home/Home.jsx";
import RegisterPage from "../pages/Register.jsx";
import StartPage from "../pages/Start/Start.jsx";
import DashboardPage from "../pages/Dashboard/Dashboard.jsx";
import SettingsPage from "../pages/Settings.jsx";
import FavoritePage from "../pages/Favorite.jsx";
import LogoutPage from "../pages/Logout.jsx";
import ServicesPage from "../pages/Services/Services.jsx";
import CovernoratesPage from "../pages/Covernorates/Covernorates.jsx";
import SubServicesPage from "../pages/SubServices/SubServices.jsx";
import DetailsPage from "../pages/Details/Details.jsx";

import { authLoader, unauthLoader } from "../util/auth.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [
          { path: "", element: <CovernoratesPage /> },
          { path: ":covId", element: <ServicesPage /> },
          { path: ":covId/:serviceName", element: <SubServicesPage /> },
          {
            path: "/:covId/:serviceName/:subServiceDetails",
            element: <DetailsPage />,
          },
        ],
      },
      { path: "statistics", element: <DashboardPage /> },
      { path: "favorite", element: <FavoritePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "logout", element: <LogoutPage /> },
    ],
  },
  {
    path: "/welcome",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: unauthLoader,
    children: [
      { index: true, element: <StartPage /> },
      { path: "login", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
