import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notFound/NotFound';
import Forbidden from './pages/forbidden/Forbidden';
import ServerError from './pages/server-error/ServerError';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Vacancy from './pages/vacancy/Vacancy';
 
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/vacancy",
          element: <Vacancy />,
        },
        {
          path: "/forbidden", // 403 page route
          element: <Forbidden />,
        },
        {
          path: "/server-error", // 500 page route
          element: <ServerError />,
        },
        {
          path: "*",  
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
