import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home/Home.jsx';
import GridPage from '../pages/Grid/Grid.jsx';
import RootLayout from '../pages/Root/Root.jsx';
import ErrorPage from '../pages/Error/Error.jsx';
import LoginPage from '../pages/Login/Login.jsx';
import DetailsPage from '../pages/Details/Details.jsx';
import LandingPage from '../pages/Landing/Landing.jsx';
import ServicesPage from '../pages/Services/Services.jsx';
import StatisticsPage from '../pages/Statistics/Statistics.jsx';
import FillWallet from '../components/FillWallet/FillWallet.jsx';
import NewService from '../components/NewService/NewService.jsx';
import SubServicesPage from '../pages/SubServices/SubServices.jsx';
import GovernoratesPage from '../pages/Governorates/Governorates.jsx';
import ServiceTypesPage from '../pages/ServiceTypes/ServiceTypes.jsx';
import NewOwnerForm from '../components/NewOwnerForm/NewOwnerForm.jsx';

import { authLoader, unauthLoader } from '../util/auth.js';
import { Suspense } from 'react';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: authLoader,
      children: [
        {
          path: '',
          element: (
            <Suspense>
              <HomePage />
            </Suspense>
          ),
          children: [
            {
              path: 'fillUserWallet',
              element: (
                <Suspense>
                  <FillWallet />,
                </Suspense>
              ),
            },
            {
              path: 'createServiceOwner',
              element: (
                <Suspense>
                  <NewOwnerForm />,
                </Suspense>
              ),
            },
            {
              path: 'createServiceOwner/addService',
              element: (
                <Suspense>
                  <NewService />,
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'statistics',
          element: (
            <Suspense>
              <StatisticsPage />
            </Suspense>
          ),
        },
        {
          path: 'governorates',
          element: (
            <Suspense>
              <GridPage />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense>
                  <GovernoratesPage />
                </Suspense>
              ),
            },
            {
              path: ':covId',
              element: (
                <Suspense>
                  <ServiceTypesPage />
                </Suspense>
              ),
            },
            {
              path: ':covId/:serviceType',
              element: (
                <Suspense>
                  <ServicesPage />
                </Suspense>
              ),
            },
            {
              path: ':covId/:serviceType/:serviceName',
              element: (
                <Suspense>
                  <SubServicesPage />
                </Suspense>
              ),
            },
            {
              path: ':covId/:serviceType/:serviceName/:subserviceDetails',
              element: (
                <Suspense>
                  <DetailsPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: '/welcome',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: unauthLoader,
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <LandingPage />
            </Suspense>
          ),
        },
        {
          path: 'login',
          element: (
            <Suspense>
              <LoginPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
