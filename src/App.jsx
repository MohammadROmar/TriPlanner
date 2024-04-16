import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/Erorr.jsx";
import HomePage from "./pages/Home.jsx";
import RegisterPage from "./pages/Register.jsx";
import StartPage from "./pages/Start.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "start", element: <StartPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  );
}

export default App;
