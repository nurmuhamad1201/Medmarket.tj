import React from 'react';
import { Box, Grid, IconButton, Skeleton, Stack } from '@mui/material';

import { ShoppingCart } from 'lucide-react';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ p: 2, width: '97%', margin: 'auto', paddingTop: '50px' }}>
      {/* Top Navbar */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Skeleton variant="rounded" width="80px" height="80px" sx={{borderRadius:"10px"}} />
        <Skeleton variant="rounded" height="80px" width="100%" sx={{borderRadius:"10px"}} />
      </Stack>

    {/* Top Large + 3 small cards */}
        <Grid container spacing={2} sx={{ mb: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingY:"20px"  }}>
          <Grid item xs={12} md={6} sx={{ flex: '56%' }}>
            <Skeleton variant="rounded" width="100%" height="300px" sx={{borderRadius:"10px"}} />
          </Grid>
          {[...Array(2)].map((_, i) => (
            <Grid item xs={12} sm={4} md={2} key={i} sx={{ flex: '20%', maxWidth: '40%' }}>
            <Skeleton variant="rounded" width="100%" height="300px" sx={{borderRadius:"10px"}} />
            </Grid>
          ))}
        </Grid>

        {/* Section Title */}
      <Skeleton variant="text" width="30%" height={40} sx={{ mb: 2 }} />

      {/* 5 cards with titles/lines */}
      <Grid container spacing={2} sx={{ mb: 2 , gap: "30px" ,paddingY:"20px" }}>
  {[...Array(5)].map((_, index) => (
    <Grid item xs={12} sm={6} md={12 / 5} key={index}>
      <Skeleton variant="rounded" height="223px" width="222px" />
      <Skeleton width="80%" sx={{ mt: 1 }} />
      <Skeleton width="60%" />
    </Grid>
  ))}
</Grid>

      {/* Full width banner */}
      <Skeleton variant="rounded" height="250px" sx={{ mb: 3 }} />

      {/* Another Section Title */}
      <Skeleton variant="text" width="30%" height={40} sx={{ mb: 2 }} />

      {/* Another row of 5 cards */}
      <Grid container spacing={2} sx={{ mb: 2 , gap: "30px" }}>
  {[...Array(5)].map((_, index) => (
    <Grid item xs={12} sm={6} md={12 / 5} key={index}>
      <Skeleton variant="rounded" height="223px" width="222px" />
      <Skeleton width="80%" sx={{ mt: 1 }} />
      <Skeleton width="60%" />
    </Grid>
  ))}
</Grid>
      <Grid container spacing={2} sx={{ mb: 2 , gap: "30px" }}>
  {[...Array(5)].map((_, index) => (
    <Grid item xs={12} sm={6} md={12 / 5} key={index}>
      <Skeleton variant="rounded" height="223px" width="222px" />
      <Skeleton width="80%" sx={{ mt: 1 }} />
      <Skeleton width="60%" />
    </Grid>
  ))}
</Grid>
      <Grid container spacing={2} sx={{ mb: 2 , gap: "30px" }}>
  {[...Array(5)].map((_, index) => (
    <Grid item xs={12} sm={6} md={12 / 5} key={index}>
      <Skeleton variant="rounded" height="223px" width="222px" />
      <Skeleton width="80%" sx={{ mt: 1 }} />
      <Skeleton width="60%" />
    </Grid>
  ))}
</Grid>



    </Box>
  );
};

export default LoadingSkeleton;
