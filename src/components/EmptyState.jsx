import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

 

const EmptyState = ({
  image,
  Icon,
  title,
  buttonText = 'На главную',
  to = '/',
  iconColor = '#FBC02D',
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="white"
    >
      {image && <img src={image} alt="empty" style={{ width: 150, height: 150, marginBottom: 32 }} />}
      {Icon && <Icon style={{ width: 128, height: 128, marginBottom: 32, color: iconColor }} />}

      <Typography variant="h5" fontWeight={600} mt={4}>
        {title}
      </Typography>

      <Button
        component={RouterLink}
        to={to}
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#673ab7', color: 'white', width: '200px', marginTop: 5 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default EmptyState;
