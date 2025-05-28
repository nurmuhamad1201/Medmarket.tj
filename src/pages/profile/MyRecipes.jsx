import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import retsept from '@/assets/svg/retsept.svg' 
import EmptyState from '@/components/EmptyState'
export default function MyRecipes() {
  return (
    <EmptyState image={retsept} title={`Здесь будут Ваши рецепты`}   />
  )
}
