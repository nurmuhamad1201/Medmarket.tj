import EmptyState from '@/components/EmptyState'
import { Box, Button, Typography } from '@mui/material'
import { HeartIcon } from 'lucide-react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function MyFavorites() {
    return (
       <EmptyState Icon={HeartIcon} title="Здесь будут Ваши избранные" buttonText="На главную"  image={null}  />
    )
}
