import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home/Home.jsx';
import LandingPage from '../pages/Landing/Landing.jsx';
const GridPage = lazy(() => import('../pages/Grid/Grid.jsx'));
const RootLayout = lazy(() => import('../pages/Root/Root.jsx'));
const ErrorPage = lazy(() => import('../pages/Error/Error.jsx'));
const LoginPage = lazy(() => import('../pages/Login/Login.jsx'));
const DetailsPage = lazy(() => import('../pages/Details/Details.jsx'));
const ServicesPage = lazy(() => import('../pages/Services/Services.jsx'));
const StatisticsPage = lazy(() => import('../pages/Statistics/Statistics.jsx'));
const FillWallet = lazy(() =>
  import('../components/FillWallet/FillWallet.jsx')
);
const NewService = lazy(() =>
  import('../components/NewService/NewService.jsx')
);
const SubServicesPage = lazy(() =>
  import('../pages/SubServices/SubServices.jsx')
);
const GovernoratesPage = lazy(() =>
  import('../pages/Governorates/Governorates.jsx')
);
const ServiceTypesPage = lazy(() =>
  import('../pages/ServiceTypes/ServiceTypes.jsx')
);
const NewOwnerForm = lazy(() =>
  import('../components/NewOwnerForm/NewOwnerForm.jsx')
);

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
