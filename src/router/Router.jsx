import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/Error/Error.jsx";
import GridPage from "../pages/Grid/Grid.jsx";
import RegisterPage from "../pages/Register.jsx";
import StartPage from "../pages/Start/Start.jsx";
import DashboardPage from "../pages/Dashboard/Dashboard.jsx";
import SettingsPage from "../pages/Settings.jsx";
import FavoritePage from "../pages/Favorite.jsx";
import LogoutPage from "../pages/Logout.jsx";
import ServicesPage from "../pages/Services/Services.jsx";
import HomePage from "../pages/Home/Home.jsx";
import GovernoratesPage from "../pages/Governorates/Governorates.jsx";
import SubServicesPage from "../pages/SubServices/SubServices.jsx";
import DetailsPage from "../pages/Details/Details.jsx";
import ServiceTypesPage from "../pages/ServiceTypes/ServiceTypes.jsx";
import NewOwnerForm from "../components/NewOwnerForm/NewOwnerForm.jsx";
import FillWallet from "../components/FillWallet/FillWallet.jsx";
import NewService from "../components/NewService/NewService.jsx";

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
          {
            path: "createServiceOwner",
            element: <NewOwnerForm />
          },
          {
            path: "fillUserWallet",
            element: <FillWallet />
          },
          {
            path: "createServiceOwner/addService",
            element: <NewService />
          }
        ]
      },
      {
        path: "governorates",
        element: <GridPage />,
        children: [
          { index: true, element: <GovernoratesPage /> },
          { path: ":covId", element: <ServiceTypesPage /> },
          { path: ":covId/:serviceType", element: <ServicesPage /> },
          {
            path: ":covId/:serviceType/:serviceName",
            element: <SubServicesPage />
          },
          {
            path: ":covId/:serviceType/:serviceName/:subserviceDetails",
            element: <DetailsPage />
          }
        ]
      },
      { path: "statistics", element: <DashboardPage /> },
      { path: "favorite", element: <FavoritePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "logout", element: <LogoutPage /> }
    ]
  },
  {
    path: "/welcome",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: unauthLoader,
    children: [
      { index: true, element: <StartPage /> },
      { path: "login", element: <RegisterPage /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
