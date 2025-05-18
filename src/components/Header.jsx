import imageTop from '@/assets/images/imagetop.png';
import aksiya from '@/assets/svg/aksiya.svg';

import { Link } from 'react-router-dom';
import { Box, Button, IconButton, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { ShoppingCart } from 'lucide-react';
import LoginDialog from './Login';
import CitySelector from './Cityselector';
 

const categories = [
  'Акции', 'Скидки', 'Насморк', 'Температура', 'Лечебная косметика', 'Аптечка', 'Грипп', 'Витамины'
];

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <img src={imageTop} alt="Medical health banner" className="w-full" />

      <section className="w-[86%] m-auto" aria-label="Main header navigation">
        <div className="flex items-center mt-0">
         <CitySelector />
        </div>

        <nav className="flex items-center justify-between w-full gap-5 px-4 rounded-lg flex-wrap" role="navigation" aria-label="Primary navigation">
          <Link to="/">
            <h1 className="font-semibold text-2xl sm:text-4xl text-[#7EC1FF]">MEDMARKET</h1>
          </Link>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8168F0",
              color: "white",
              borderRadius: "8px",
              fontWeight: "600",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#6a54d8",
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
            aria-label="Открыть каталог"
          >
            <MenuSharpIcon fontSize="large" />
            <span className="hidden sm:inline">Каталог</span>
          </Button>

          {/* Search Bar */}
          <form role="search" className="flex flex-grow items-center bg-[#f4f4f9] rounded-lg p-1" aria-label="Поиск товаров">
            <TextField
              label="Искать Витамин Д, Дермотин, Простуда..."
               
              variant="outlined"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#8168F0' },
                  '&:hover fieldset': { borderColor: '#8168F0' },
                  '&.Mui-focused fieldset': { borderColor: '#8168F0' },
                },
                backgroundColor: '#ffffff',
                borderRadius: '10px 0 0 10px',
              }}
            />
            <IconButton
              type="submit"
              sx={{
                width: '60px',
                height: '55px',
                borderRadius: '0 10px 10px 0',
                backgroundColor: '#8168F0',
                color: 'white',
                '&:hover': { backgroundColor: '#6a54d8' },
              }}
              aria-label="Начать поиск"
            >
              <SearchOutlinedIcon />
            </IconButton>
          </form>

          {/* User Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
         
            <LoginDialog />
            <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Избранное">
              <FavoriteBorderOutlinedIcon fontSize="large" />
              <span className="text-sm mt-1">Избранное</span>
            </IconButton>

            <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Корзина">
              <ShoppingCart size={30} />
              <span className="text-sm mt-1">Корзина</span>
            </IconButton>
          </Box>
        </nav>

       
        <nav aria-label="Навигация по акциям и категориям">
          <ul className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-4 rounded-lg">
            {categories.map((label, idx) => (
              <li key={idx}>
                <Link to="/" className="flex items-center gap-1 bg-[#F6F7FA] rounded-2xl px-3 py-1 text-[14px] sm:text-[17px] font-semibold text-black">
                  <img src={aksiya} alt={`Иконка для ${label}`} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          

        </nav>
      </section>
    </header>
  );
}
