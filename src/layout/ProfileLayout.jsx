import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  IconButton
} from '@mui/material';
import {
  InventoryOutlined as BoxIcon,
  FavoriteBorderOutlined as FavoriteIcon,
  CommentOutlined as MessageIcon,
  CalendarTodayOutlined as CalendarIcon,
  RefreshOutlined as RefreshIcon,
 
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { ArrowRightIcon, User } from 'lucide-react';

const breadcrumbMap = {
  orders: 'Мои заказы',
  favorites: 'Мои избранные',
  reviews: 'Мои отзывы',
  recipes: 'Мои рецепты',
  returns: 'Мои возвраты',
  massages: 'Мои сообщения',
};

export default function ProfileLayout() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentPage = pathParts[1]; // profile/<page>
  const currentTitle = breadcrumbMap[currentPage] || '';

  const navItems = [
    { path: 'orders', icon: <BoxIcon fontSize="small" />, text: 'Мои заказы' },
    { path: 'favorites', icon: <FavoriteIcon fontSize="small" />, text: 'Мои избранные' },
    { path: 'reviews', icon: <MessageIcon fontSize="small" />, text: 'Мои отзывы' },
    { path: 'recipes', icon: <CalendarIcon fontSize="small" />, text: 'Мои рецепты' },
    { path: 'returns', icon: <RefreshIcon fontSize="small" />, text: 'Мои возвраты' },
  ];

  return (
    <main className="w-[90%] max-w-7xl mx-auto px-4 py-8">
       
      <nav className="text-sm mb-6 text-gray-600 font-medium" aria-label="Breadcrumb">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Главная</Link>
        <span className="mx-2">/</span>
        <Link to="/profile" className="text-gray-500 hover:text-gray-700">Профиль</Link>
        {currentTitle && (
          <>
            <span className="mx-2">/</span>
            <span className="text-purple-600 font-semibold" aria-current="page">{currentTitle}</span>
          </>
        )}
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <aside className="bg-[#F6F7FA] rounded-lg shadow p-5 md:w-[310px] h-auto w-full">
          <Link to={`/profile`}>
          <header className="flex bg-[#FFFFFF] p-3 items-center justify-between mb-6">
            <div className="flex items-center">
              <User className="w-12 h-12 rounded-full bg-[#E4E7EE] p-1 text-gray-500 mr-4" />
              <div>
                <p className="text-base font-semibold">Самадов Мансур</p>
                <p className="text-sm text-gray-500">+992 900 11 22 33</p>
              </div>
            </div>
            <IconButton size="small" 
              sx={{
                backgroundColor: '#8168F0',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#6b54e2',
                },
              }}
            >
              <ArrowRightIcon fontSize="small" />
            </IconButton>
          </header>
          </Link>

          <ul className="space-y-3 p-3 bg-[#FFFFFF]">
            {navItems.map(({ path, icon, text }) => (
              <li key={path} className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <Link to={`/profile/${path}`} className="flex items-center w-full text-gray-700 hover:text-purple-600">
                  <span className="mr-3 text-gray-500">{icon}</span>
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              borderColor: '#E0E0E0',
              color: 'text.primary',
              justifyContent: 'flex-start',
              textTransform: 'none',
              bgcolor: '#FFFFFF',
              padding: '10px',
              paddingLeft: '20px',
            }}
            startIcon={<LogoutIcon fontSize="small" />}
          >
            Выйти
          </Button>
        </aside>

        
        <section className="flex-1 space-y-6">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
