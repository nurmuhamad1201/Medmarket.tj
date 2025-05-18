 
import { Checkbox, FormControlLabel, IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, Fragment, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment >
      <Button onClick={handleClickOpen}>
      <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Войти в аккаунт">
        <AccountCircleOutlinedIcon fontSize="large" />
        <span className="text-sm mt-1">Войти</span>
      </IconButton>
      </Button>
      <Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
  PaperProps={{
    sx: {
      borderRadius: "23px",
      position: 'relative',
      width: '480px',
      overflow: 'hidden', 
      py: 3
    
    },
  }}
>
  
  <Button
    onClick={handleClose}
    sx={{
      position: 'absolute',
      top: 8,
      right: 8,
      minWidth: 'auto',
      padding: '4px 8px',
      fontSize: '1rem',
      color: '#8168F0',
    }}
  >
    X
  </Button>

  <DialogTitle
    sx={{
      textAlign: 'center',
      fontWeight: 700,
      fontFamily: 'Mulish',
      fontSize: '30px',
      mt: 3,
    }}
  >
    Вход
  </DialogTitle>

  <DialogContent
    sx={{
      textAlign: 'center',
      px: 8, // horizontal padding
      pb: 2, // bottom padding
    }}
  >
    <DialogContentText
      sx={{
        mb: 2,
        fontWeight: 600,
        fontFamily: 'Mulish',
        fontSize: '22px',
        color: '#000000',
      }}
    >
      Введите номер телефона
    </DialogContentText>
    <DialogContentText
      sx={{
        mb: 2,
        fontWeight: 500,
        fontFamily: 'Mulish',
        fontSize: '18px',
        color: '#000000',
        px: '40px',
      }}
    >
      Мы отправим вам СМС с кодом подтверждения
    </DialogContentText>

    <TextField
      fullWidth
      variant="outlined"
      placeholder="Введите номер телефона"
      InputProps={{
        startAdornment: <span style={{ marginRight: 8 }}>+992</span>,
      }}
    />

    <FormControlLabel
      control={<Checkbox />}
      label="Запомнить меня"
      sx={{  justifyContent: 'start', display: 'flex' }}
    />
  </DialogContent>

  <DialogActions sx={{ justifyContent: 'center', px: 8, pb: 3 }}>
    <Button
      onClick={handleClose}
      variant="contained"
      sx={{
        width: '100%',
        height: '55px',
        backgroundColor: '#8168F0',
        color: 'white',
        borderRadius: '8px',
        fontWeight: '600',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#6a54d8',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
     Войти  
    </Button>
  </DialogActions>
</Dialog>



    </Fragment>
    );
}


