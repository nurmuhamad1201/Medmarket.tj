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
import MyOrders from './pages/profile/MyOrders';
import MyFavorites from './pages/profile/MyFavorites';
import MyReviews from './pages/profile/MyReviews';
import MyRecipes from './pages/profile/MyRecipes';
import MyReturns from './pages/profile/MyReturns';
import ProfileLayout from './layout/ProfileLayout';
import Massages from './pages/profile/Massages';
import BecomePartner from './pages/becomePartner/BecomePartner';
import Terms from './pages/terms/Terms';
import DrugDetailPage from './pages/drugs/DrugDetailPage';
 
export default function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Profile /> },  
          { path: "orders", element: <MyOrders /> },
          { path: "favorites", element: <MyFavorites /> },
          { path: "reviews", element: <MyReviews /> },
          { path: "recipes", element: <MyRecipes /> },
          { path: "returns", element: <MyReturns /> },
          {path: "massages", element: <Massages />}, 
        ]
      },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/vacancy", element: <Vacancy /> },
      { path: "/become-partner" , element: <BecomePartner />},
      { path: "/drug/:slug" , element: <DrugDetailPage /> }, //  
      { path: "/terms", element: <Terms /> },
      { path: "/forbidden", element: <Forbidden /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

  return <RouterProvider router={router} />;
}
