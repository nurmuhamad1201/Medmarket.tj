import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import forbiddenImg from '@/assets/images/forbidden.png'; // Optional: create or use a relevant image

export default function Forbidden() {
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
      {forbiddenImg && (
        <Box component="img"
          src={forbiddenImg}
          alt="Access denied"
          sx={{ maxWidth: '250px', width: '100%', mb: 4 }}
        />
      )}

      <Typography variant="h4" color="error" gutterBottom>
        Доступ запрещён!
      </Typography>

      <Typography variant="body1" color="textSecondary" maxWidth="500px" mb={4}>
        К сожалению, у вас нет прав для доступа к этой странице. Возможно,вы пытаетесь попасть на защищённый раздел сайта или доступ к этойстранице ограничен.
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
