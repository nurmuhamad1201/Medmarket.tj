import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Imagecategory from './imagecategory';
import about from '@/assets/svg/about.svg';
import drug from '@/assets/svg/drug.svg';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { Link } from 'react-router-dom';

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

const popularProducts = {
    'Гормоны-кортикостероиды': [
        { img: drug, name: 'Артрорелиф-с-хондроитином 5% гель для тела 50 мл', price: '99 сом.', oldprice: "150 сом.", city: "Sandoz, Германия" },
        { img: drug, name: 'Преднизолон', price: '99 сом.', oldprice: "150 сом.", city: "Sandoz, Германия" },
        { img: drug, name: 'Гидрокортизон', price: '99 сом.', oldprice: "150 сом.", city: "Sandoz, Германия" },
    ],
    'Обезболивающие': [
        { img: drug, name: 'Парацетамол', price: '450 сом.', oldprice: "600 сом.", city: "Bayer, Германия" },
        { img: drug, name: 'Ибупрофен', price: '690 сом.', oldprice: "850 сом.", city: "Pfizer, США" },
        { img: drug, name: 'Кеторол', price: '1 100 сом.', oldprice: "1 350 сом.", city: "Novartis, Швейцария" },
    ],
};

export default function CatalogMenu({ open }) {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);

    if (!open) return null;



    const createProductSlug = (name) => {
  return encodeURIComponent(
    name
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-а-яА-Я]/g, '') // Remove special chars except letters, numbers and hyphens
      .toLowerCase()
  );
};



    return (
       <section className='bg-white   '>
         <Box
            sx={{
                position: 'absolute',
                top: '100%',
                left: '7%',
                right: '7%',
                minHeight: '500px',
                backgroundColor: '#fff',
                display: 'flex',
                zIndex: 1000,
                borderTop: '1px solid #eee',
                
                borderRadius: '0 0 8px 8px',
            }}
        >
            
            <Box sx={{ width: '20%', borderRight: '1px solid #eee' }}>
                {categories.map((cat) => (
                    <Box
                        key={cat.name}
                        onMouseEnter={() => setHoveredCategory(cat.name)}
                        sx={{
                            padding: '12px 16px',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            backgroundColor: hoveredCategory === cat.name ? "#F6F7FA" : "#FFFFFF",
                            "&:hover": { backgroundColor: "#F6F7FA" }
                        }}
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <Imagecategory
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    filter: hoveredCategory === cat.name ?
                                        "invert(29%) sepia(72%) saturate(750%) hue-rotate(220deg)" : "none"
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: hoveredCategory === cat.name ? "#8168F0" : "#333"
                                }}
                            >
                                {cat.name}
                            </Typography>
                        </Box>
                        <ChevronRightIcon
                            sx={{
                                fontSize: '18px',
                                color: hoveredCategory === cat.name ? "#8168F0" : "#999"
                            }}
                        />
                    </Box>
                ))}
            </Box>

            
            {hoveredCategory && (
                <Box sx={{ width: '25%', borderRight: '1px solid #eee' }}>
                    <Box display="flex" alignItems="baseline" p={2} borderBottom="1px solid #eee">
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: '20px',
                                mr: 1
                            }}
                        >
                            {hoveredCategory}
                        </Typography>
                        <Typography variant="caption" color="#8168F0">
                            5 678 товаров
                        </Typography>
                    </Box>
                    {categories
                        .find((c) => c.name === hoveredCategory)
                        ?.subcategories.map((subcat) => (
                            <Box
                                key={subcat.name}
                                onMouseEnter={() => setHoveredSubCategory(subcat.name)}
                                sx={{
                                    padding: '10px 16px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: hoveredSubCategory === subcat.name ? '#F6F7FA' : 'transparent',
                                    borderLeft: hoveredSubCategory === subcat.name ? '3px solid #8168F0' : 'none'
                                }}
                            >
                                <Typography sx={{ 
                                    fontWeight: 600, 
                                    fontSize: "14px",
                                    color: hoveredSubCategory === subcat.name ? "#8168F0" : "#333"
                                }}>
                                    {subcat.name}
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: '16px',
                                        color: hoveredSubCategory === subcat.name ? "#8168F0" : "#999"
                                    }}
                                />
                            </Box>
                        ))}
                </Box>
            )}

            {/* Subcategory Items (55%) */}
            {hoveredCategory && hoveredSubCategory && (
                <Box sx={{ width: '55%', p: 2, display: 'flex' }}>
                    {/* Subcategory items list (40%) */}
                    <Box sx={{ width: '40%', pr: 2 }}>
                        {categories
                            .find((c) => c.name === hoveredCategory)
                            ?.subcategories.find((s) => s.name === hoveredSubCategory)
                            ?.sub.map((item) => (
                                <Box 
                                    key={item} 
                                    onMouseEnter={() => setHoveredSubItem(item)}
                                    sx={{
                                        padding: '8px 12px',
                                        cursor: 'pointer',
                                        backgroundColor: hoveredSubItem === item ? '#F6F7FA' : 'transparent',
                                        borderRadius: '4px',
                                        mb: 0.5,
                                        borderLeft: hoveredSubItem === item ? '2px solid #8168F0' : 'none'
                                    }}
                                >
                                    <Typography sx={{ 
                                        fontWeight: 500,
                                        fontSize: '13px',
                                        color: hoveredSubItem === item ? "#8168F0" : "#555"
                                    }}>
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>

                    {/* Popular products (60%) */}
                    <Box sx={{ width: '60%', pl: 2, borderLeft: '1px solid #eee' }}>
                        <Box mb={2}>
                            <img src={about} alt="Promo" style={{ maxWidth: '100%', height: 'auto' }} />
                        </Box>
                        <Typography variant="subtitle1" sx={{ 
                            fontWeight: 700, 
                            mb: 1.5, 
                            color: '#8168F0',
                            fontSize: '16px'
                        }}>
                            Хиты продаж
                        </Typography>
                        
                        {hoveredSubItem && popularProducts[hoveredSubItem] ? (
                            popularProducts[hoveredSubItem].map((product, index) => (
                               
                                <Link
                                     to={`/drug/${createProductSlug(product.name)}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Box 
                                    key={index} 
                                    sx={{ 
                                        mb: 1.5, 
                                        pb: 1.5, 
                                        borderBottom: '1px solid #f0f0f0',
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1.5 
                                    }}
                                >
                                    <img 
                                        src={product.img} 
                                        alt="" 
                                        style={{ 
                                            width: '60px', 
                                            height: '60px', 
                                            objectFit: 'contain',
                                            borderRadius: '4px'
                                        }} 
                                    />
                                    <Box flex={1}>
                                        <Typography sx={{ 
                                            fontWeight: 500, 
                                            fontSize: "12px",
                                            lineHeight: 1.3,
                                            mb: 0.5
                                        }}>
                                            {product.name}
                                        </Typography>
                                        <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                                            <Typography sx={{ 
                                                color: '#8168F0', 
                                                fontWeight: 600,
                                                fontSize: '13px'
                                            }}>
                                                {product.price}
                                            </Typography>
                                            <Typography 
                                                component="del" 
                                                sx={{ 
                                                    color: '#999',
                                                    fontSize: '11px'
                                                }}
                                            >
                                                {product.oldprice}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ 
                                            fontSize: '11px', 
                                            color: '#8168F0',
                                            mb: 0.5
                                        }}>
                                            {product.city}
                                        </Typography>
                                        <Button 
                                            variant="outlined" 
                                            size="small"
                                            sx={{
                                                color: '#8168F0',
                                                borderColor: '#8168F0',
                                                fontSize: '12px',
                                                py: 0.5,
                                                px: 1,
                                                '&:hover': {
                                                    borderColor: '#6a54d8'
                                                }
                                            }}
                                        >
                                            <LocalMallRoundedIcon sx={{ 
                                                fontSize: '14px', 
                                                mr: 0.5 
                                            }} />
                                            Купить
                                        </Button>
                                    </Box>
                                </Box> 
                                    </Link>
                            ))
                        ) : (
                            <Typography variant="body2" color="textSecondary">
                                Выберите подкатегорию
                            </Typography>
                        )}
                    </Box>
                </Box>
            )}
        </Box>
       </section>
    );
}