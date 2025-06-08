import imageTop from '@/assets/images/imagetop.png';
import aksiya from '@/assets/svg/aksiya.svg';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, IconButton, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { ShoppingCart } from 'lucide-react';
import LoginDialog from './Login';
import CitySelector from './Cityselector';
import SearchModal from './SearchModal';
import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/svg/logomed.svg';
import CatalogMenu from './Catalog';
 
import CloseIcon from "@mui/icons-material/Close";

const categories = [
  'Акции', 'Скидки', 'Насморк', 'Температура', 'Лечебная косметика', 'Аптечка', 'Грипп', 'Витамины'
];

export default function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
const [openCatalog, setOpenCatalog] = useState(false);
 const location = useLocation();

useEffect(() => {
    setOpenCatalog(false);
  }, [location]);

  const searchForm = (
    <form
      role="search"
      className="flex items-center bg-[#f4f4f9] rounded-lg w-full max-w-[900px] min-h-[40px]"
      aria-label="Поиск товаров"
      onClick={() => setSearchOpen(true)}
    >
      <TextField
        inputRef={searchRef}
        label="Искать Витамин Д, Дермотин, Простуда..."
        variant="outlined"
        sx={{
          width: '100%',
          '& .MuiInputBase-root': {
            height: '50px',
            fontSize: '14px',
          },
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
          width: '75px',
          height: '50px',
          borderRadius: '0 10px 10px 0',
          backgroundColor: '#8168F0',
          color: 'white',
          '&:hover': { backgroundColor: '#6a54d8' },
        }}
        aria-label="Начать поиск"
      >
        <SearchOutlinedIcon fontSize="small" />
      </IconButton>
    </form>
  );

 

   

  return (
   <>
    <header className="bg-white " style={{ position: 'relative', zIndex: 1200 }}>
      <img
        src={imageTop}
        alt="Medical health banner"
        className="w-full animated-tilt"
      />

      <section className="w-[86%] m-auto" aria-label="Main header navigation">
        <div className="flex items-center mt-0 mb-2">
          <CitySelector />
        </div>

        <nav className="flex flex-wrap items-center justify-between gap-5 px-2 rounded-lg" role="navigation" aria-label="Primary navigation">
          <Link to="/" className="shrink-0">
            <img src={logo} className='h-[50px]' alt="Company logo" />
          </Link>
<Button
        variant="contained"
        onClick={() => setOpenCatalog((prev) => !prev)}
        sx={{
          backgroundColor: openCatalog ? "#FFFFFF" : "#8168F0",
          color: openCatalog ? "#8168F0" : "white",
          border: "2px solid var(--Color-main, #8168F0)",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "14px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          "&:hover": {
            backgroundColor: openCatalog ? "#f3f3f3" : "#6a54d8",
          },
        }}
        aria-label="Открыть каталог"
      >
        {openCatalog ? <CloseIcon fontSize="small" /> : <MenuSharpIcon fontSize="small" />}
        <span className="hidden sm:inline">{openCatalog ? "Закрыть" : "Каталог"}</span>
      </Button>
      

          <div className="flex-grow">
            <SearchModal
              anchorEl={searchRef.current}
              open={isSearchOpen}
              onClose={() => setSearchOpen(false)}
              searchForm={searchForm}
            />
          </div>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LoginDialog />

            <Link to="/profile/massages" className="flex flex-col items-center">
              <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Уведомления">
                <NotificationsNoneRoundedIcon fontSize="large" />
                <span className="text-sm mt-1">Уведомления</span>
              </IconButton>
            </Link>

            <Link to="/cart" className="flex flex-col items-center">
              <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Корзина">
                <ShoppingCart fontSize="large" />
                <span className="text-sm mt-1">Корзина</span>
              </IconButton>
            </Link>
          </Box>
        </nav>

        <nav aria-label="Навигация по категориям" className="mt-2">
          <ul className="flex flex-wrap items-center justify-between gap-2 bg-white px-2 py-3 rounded-lg">
            {categories.map((label, idx) => (
              <li key={idx}>
                <Link 
                  to="/" 
                  className="flex items-center gap-1 bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-3 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                >
                    <img src={aksiya} alt="" className="w-4 h-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <CatalogMenu open={openCatalog} />
    </header>
   
   </>
  );
}