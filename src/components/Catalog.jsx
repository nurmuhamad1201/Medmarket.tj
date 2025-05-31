
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import Imagecategory from './imagecategory';

const categories = [
    {
        name: 'Лекарства',
        subcategories: [
            {
                name: 'Аллергия',
                sub: ['Боль и спазмы', 'Боль и температура', 'Гормоны-кортикостероиды', 'Обезболивающие'],
            },
            {
                name: 'Ухо, горло, нос',
                sub: ['Кожа', 'Боль, температура', 'Противовирусные средства'],
            },
            {
                name: 'Антибиотики',
                sub: ['Глисты, вши, чесотка', 'Диабет', 'Сердечно-сосудистые', 'Неврология, психиатрия', 'Зубы и рот', 'Глаза', 'Геморрой'],
            },
        ],
    },
];

export default function CatalogMenu({ open }) {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

    if (!open) return null;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                height: '100vh',
                backgroundColor: '#fff',
                display: 'flex',
                zIndex: 1000,
            }}
        >
            
            <Box sx={{ width: '20%', borderRight: '1px solid #eee' }}>
                {categories.map((cat) => (
                   <Box
  key={cat.name}
  onMouseEnter={() => setHoveredCategory(cat.name)}
 
  sx={{
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "20px",
    cursor: "pointer",
    backgroundColor: hoveredCategory === cat.name ? "#F6F7FA" : "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F6F7FA"
    }
  }}
>
  <span className="flex items-center gap-2">
    <Imagecategory
      style={{
        filter:
          hoveredCategory === cat.name
            ? "invert(29%) sepia(72%) saturate(750%) hue-rotate(220deg)"
            : "none"
      }}
    />

    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 700,
        color: hoveredCategory === cat.name ? "#8168F0" : "inherit"
      }}
    >
      {cat.name}
    </Typography>
  </span>

  <ChevronRightIcon
    sx={{
      color: hoveredCategory === cat.name ? "#8168F0" : "inherit"
    }}
  />
</Box>

                ))}
            </Box>

            
          {hoveredCategory && (
  <Box sx={{ width: '25%', borderRight: '1px solid #eee' }}>
 <div className='flex justify-start'>   <Typography
      sx={{
        fontWeight: 700,
        fontSize: '29px',
         
        padding: 2,
        borderBottom: '1px solid #eee'
      }}
    >
      {hoveredCategory}
    </Typography>
    <span className='text-[13px] font-normal text-[#8168F0] mt-9'>5 678 товаров</span>
</div>
    {categories
      .find((c) => c.name === hoveredCategory)
      ?.subcategories.map((subcat) => (
        <Box
          key={subcat.name}
          onMouseEnter={() => setHoveredSubCategory(subcat.name)}
          sx={{
            padding: 2,
            cursor: 'pointer',
            backgroundColor:
              hoveredSubCategory === subcat.name ? '#e0e0e0' : 'transparent',
          }}
        >
          <Typography sx={{fontWeight:700, fontSize:"16px"}}>{subcat.name}</Typography>
        </Box>
      ))}
  </Box>
)}


            
            {hoveredCategory && hoveredSubCategory && (
                <Box sx={{ width: '55%', padding: 2 }}>
                    {categories
                        .find((c) => c.name === hoveredCategory)
                        ?.subcategories.find((s) => s.name === hoveredSubCategory)
                        ?.sub.map((item) => (
                            <Typography key={item} sx={{ padding: 1 }}>
                                {item}
                            </Typography>
                        ))}
                </Box>
            )}
        </Box>
    );
}
