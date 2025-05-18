import React, { useState } from "react";
import { IconButton, Modal, Box, Button } from "@mui/material";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import CloseIcon from "@mui/icons-material/Close"; 

export default function CitySelector() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Душанбе");
  const [cities] = useState([
    "Душанбе", "Бохтар", "Худжанд", "Кулоб", "Гиссар", "Куляб", "Нурек", "Панджикент", "Исфара",
    "Вахдат", "Турсунзаде", "Рудаки",
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    handleClose();
  };

  return (
    <div>
     
      <IconButton
        sx={{ height: "50px", px: "20px" }}
        aria-label="Ваше местоположение: Душанбе"
        onClick={handleOpen}
      >
        <LocationOnSharpIcon sx={{ color: "#000000" }} fontSize="large" />
        <span className="text-sm font-medium text-black">{selectedCity}</span>
      </IconButton>

    
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          }}
          onClick={handleClose} 
        >
          <Box
            sx={{
              backgroundColor: "#F6F7FA", 
              padding: "20px",
              borderRadius: "23px",
              width: "40%",
              maxWidth: "800px", 
              position: "relative", 
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button (X) */}
            <IconButton
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "#000",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>

            <h2 style={{ fontWeight: 600 }}>Выберите ваш город</h2>

             
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", 
                gap: "10px",  
                padding: "10px 0",
              }}
            >
              {cities.map((city, index) => (
                <Button
                  key={index}
                  fullWidth
                  variant="outlined"
                  sx={{
                    fontWeight: 600, 
                    backgroundColor: "#F6F7FA",  
                    textTransform: "none",  
                    border: "1px solid #ddd", 
                    padding: "10px",
                    color: "#000", 
                  }}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </Button>
              ))}
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
