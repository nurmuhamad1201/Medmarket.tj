import EmptyState from '@/components/EmptyState'
import { Box, Button, Typography } from '@mui/material'
import { CalendarSync } from 'lucide-react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'


export default function MyReturns() {
  return (
       <EmptyState
      Icon={CalendarSync}
      title="Здесь будут Ваши возвраты"
    />
  )
}
