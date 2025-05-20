import { Box, Button, Typography } from '@mui/material'
import { HeartIcon } from 'lucide-react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function MyFavorites() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="white"
        >
            {/* Heart Icon */}
            <HeartIcon style={{ width: 128, height: 128, marginBottom: 32 }} />

            {/* Text */}
            <Typography variant="h5" fontWeight={600} mb={4}>
                Здесь будут Ваши избранные
            </Typography>

            {/* Button */}
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                sx={{ backgroundColor: '#673ab7', color: 'white', width: '200px' }}
            >
                На главную
            </Button>
        </Box>
    )
}
