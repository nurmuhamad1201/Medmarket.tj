import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import notfound from '@/assets/images/notfound.png';

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={3}
      textAlign="center"
      bgcolor="#f9f9f9"
    >
      <Box
        component="img"
        src={notfound}
        alt="Page not found"
        sx={{
          maxWidth: '300px',
          width: '100%',
          height: 'auto',
          mb: 4,
        }}
      />

      <Typography variant="h4" color="textPrimary" gutterBottom>
        Упс! Кажется, вы заблудились...
      </Typography>

      <Typography variant="body1" color="textSecondary" maxWidth="500px" mb={4}>
        К сожалению, страница, которую вы ищете, не найдена. Возможно,
        она была удалена, переименована или её никогда не существовало.
      </Typography>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#8168F0',
            color: 'white',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '10px',
            px: 4,
            py: 1.5,
            '&:hover': {
              backgroundColor: '#6e57d4',
            },
          }}
        >
          На главную
        </Button>
      </Link>
    

    </Box>
  );
}
