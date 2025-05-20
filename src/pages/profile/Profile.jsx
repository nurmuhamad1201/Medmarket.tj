import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ProfileForm from '@/components/ProfileForm';
 

export default function Profile() {
  const location = useLocation();
 

  return (
    <main role="main">
      
       <ProfileForm />
     
    </main>
  );
}
