import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/Home/Home.jsx";
import GridPage from "../pages/Grid/Grid.jsx";
import RootLayout from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/Error/Error.jsx";
import LoginPage from "../pages/Login/Login.jsx";
import StartPage from "../pages/Start/Start.jsx";
import ServicesPage from "../pages/Services/Services.jsx";
import StatisticsPage from "../pages/Statistics/Statistics.jsx";
import FillWallet from "../components/FillWallet/FillWallet.jsx";
import NewService from "../components/NewService/NewService.jsx";
import SubServicesPage from "../pages/SubServices/SubServices.jsx";
import GovernoratesPage from "../pages/Governorates/Governorates.jsx";
import DetailsPage from "../pages/Details/Details.jsx";
import ServiceTypesPage from "../pages/ServiceTypes/ServiceTypes.jsx";
import NewOwnerForm from "../components/NewOwnerForm/NewOwnerForm.jsx";

import { authLoader, unauthLoader } from "../util/auth.js";

export default function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
              path: "fillUserWallet",
              element: <FillWallet />,
            },
            {
              path: "createServiceOwner",
              element: <NewOwnerForm />,
            },
            {
              path: "createServiceOwner/addService",
              element: <NewService />,
            },
          ],
        },
        { path: "statistics", element: <StatisticsPage /> },
        {
          path: "governorates",
          element: <GridPage />,
          children: [
            { index: true, element: <GovernoratesPage /> },
            { path: ":covId", element: <ServiceTypesPage /> },
            { path: ":covId/:serviceType", element: <ServicesPage /> },
            {
              path: ":covId/:serviceType/:serviceName",
              element: <SubServicesPage />,
            },
            {
              path: ":covId/:serviceType/:serviceName/:subserviceDetails",
              element: <DetailsPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/welcome",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: unauthLoader,
      children: [
        { index: true, element: <StartPage /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
