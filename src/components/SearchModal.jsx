import React from "react";
import { Popper, Paper, ClickAwayListener, IconButton, Backdrop, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import sprey from "@/assets/svg/spray.svg";  
export default function SearchModal({ anchorEl, open, onClose, searchForm }) {
  return (
    <>
      <Backdrop
        open={open}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1299,
        }}
      />
      
      
      <div style={{
        position: 'relative',
        zIndex: 1301,
        width: '100%',
        maxWidth: '732px',
        margin: '0 auto'
      }}>
        {searchForm}
      </div>

      <Popper 
        open={open} 
        anchorEl={anchorEl} 
        placement="bottom-start" 
        disablePortal
        sx={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1300,
          width: '100%',
          maxWidth: '452px',
          
          top: anchorEl?.getBoundingClientRect()?.bottom + window.scrollY + 8 || 'auto'
        }}
      >
        <ClickAwayListener onClickAway={onClose}>
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              maxHeight: '80vh',
              p: 3,
              borderRadius: 2,
              overflowY: 'auto',
               marginleft: "226px",
            }}
          >
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
              aria-label="Закрыть"
            >
              <CloseIcon />
            </IconButton>
            <h2 className="text-lg font-semibold mb-4">Популярные запросы</h2>
             <section>
                <ul className="grid grid-cols-3 items-center justify-between gap-3 bg-white px-2 py-3 rounded-lg">
                           
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                            <li>
                              <Link 
                                to="/" 
                                className=" bg-[#F6F7FA] hover:bg-[#E8E9F5] rounded-2xl px-5 py-1 text-[12px] sm:text-[14px] font-semibold text-black transition-colors duration-200"
                              >
                                   
                                Милдронат
                              </Link>
                            </li>
                           
                          
                </ul>
             </section>

            <section className="p-2">
  <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    justifyContent: "space-between",
    padding: "0.5rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    backgroundColor: "#fff",
     
  }}
>
  <img src={sprey} alt="Search Icon" className="w-8 h-8" />

  <div className="flex-1">
    <h3 className="text-xs font-medium text-gray-800 leading-tight">
      Найдите нужное
    </h3>
    <p className="text-[10px] text-gray-500 leading-tight">
      Поиск поможет найти интересующие товары.
    </p>
  </div>

  <div className="text-right min-w-[60px]">
    <del className="text-[10px] text-red-500">21 с.</del>
    <p className="text-xs font-semibold text-[#8168F0]">19 с.</p>
  </div>
</Box>

</section>


          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}