import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import serverErrorImg from '@/assets/svg/servereror.svg'; // adjust path if needed

export default function ServerError() {
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
        src={serverErrorImg}
        alt="Server error"
        sx={{
          width: '400px',
          height: 'auto',
          mb: 4,
        }}
      />

      <Typography variant="h4" color="textPrimary" gutterBottom>
        Что-то пошло не так!
      </Typography>

      <Typography variant="body1" color="textSecondary" maxWidth="500px" mb={4}>
        На сервере произошла ошибка, и страница временно недоступна. Мы уже работаем над её устранением.
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
