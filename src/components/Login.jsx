import { Checkbox, FormControlLabel, IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, Fragment, useState, useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(24);
  const [isCodeInvalid, setIsCodeInvalid] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowCodeModal(false);
    setShowSuccessModal(false);
    setPhoneNumber('');
    setCode('');
    setIsCodeInvalid(false);
  };

  const handlePhoneSubmit = () => {
    // In a real app, you would send the phone number to your backend here
    setShowCodeModal(true);
  };

  const handleCodeSubmit = () => {
    // Validate the code (in a real app, you'd check with your backend)
    if (code === '1234') { // For testing purposes, use '1234' as valid code
      setShowCodeModal(false);
      setShowSuccessModal(true);
    } else {
      setIsCodeInvalid(true);
    }
  };

  const handleResendCode = () => {
    // In a real app, you would resend the code here
    setTimeLeft(24);
    setIsCodeInvalid(false);
    setCode('');
  };

  // Timer effect
  useEffect(() => {
    if (!showCodeModal) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showCodeModal]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>
        <IconButton sx={{ flexDirection: 'column', color: 'black' }} aria-label="Войти в аккаунт">
          <AccountCircleOutlinedIcon fontSize="large" />
          <span className="text-sm mt-1">Войти</span>
        </IconButton>
      </Button>

      {/* Phone Number Modal */}
      <Dialog
        open={open && !showCodeModal && !showSuccessModal}
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
            px: 8,
            pb: 2,
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            InputProps={{
              startAdornment: <span style={{ marginRight: 8 }}>+992</span>,
            }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Запомнить меня"
            sx={{ justifyContent: 'start', display: 'flex' }}
          />
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', px: 8, pb: 3 }}>
          <Button
            onClick={handlePhoneSubmit}
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

      {/* SMS Code Modal */}
      <Dialog
        open={showCodeModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
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
            px: 8,
            pb: 2,
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
            Введите код из СМС
          </DialogContentText>
          <DialogContentText
            sx={{
              mb: 2,
              fontWeight: 500,
              fontFamily: 'Mulish',
              fontSize: '18px',
              color: '#000000',
            }}
          >
            На номер +992 {phoneNumber} отправили СМС с кодом
          </DialogContentText>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Введите код"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            error={isCodeInvalid}
            sx={{ mb: 2 }}
          />

          {isCodeInvalid && (
            <DialogContentText
              sx={{
                color: 'red',
                mb: 2,
                fontWeight: 500,
                fontFamily: 'Mulish',
                fontSize: '16px',
              }}
            >
              Код неверный или прошло много времени с его получения. Попробуйте снова
            </DialogContentText>
          )}

          <DialogContentText
            sx={{
              mb: 2,
              fontWeight: 500,
              fontFamily: 'Mulish',
              fontSize: '16px',
              color: '#000000',
            }}
          >
            Срок действия кода истекает через {formatTime(timeLeft)} секунд
          </DialogContentText>

          {timeLeft === 0 && (
            <Button
              onClick={handleResendCode}
              sx={{
                color: '#8168F0',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              Отправить новый код
            </Button>
          )}
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', px: 8, pb: 3 }}>
          <Button
            onClick={handleCodeSubmit}
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
            Подтвердить
          </Button>
        </DialogActions>

        <DialogActions sx={{ justifyContent: 'center', px: 8, pb: 3 }}>
          <Button
            onClick={() => {
              setShowCodeModal(false);
              setIsCodeInvalid(false);
            }}
            sx={{
              color: '#8168F0',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '16px',
            }}
          >
            Ввели неправильный номер?
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={showSuccessModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
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
        <DialogContent
          sx={{
            textAlign: 'center',
            px: 8,
            pb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CheckCircle2 width={`150px`} height={`150px`} color="#61D2B9" style={{ marginBottom: '20px' }} />
          <DialogContentText
            sx={{
              mb: 2,
              fontWeight: 700,
              fontFamily: 'Mulish',
              fontSize: '30px',
              color: '#000000',
            }}
          >
            Вы успешно вошли!
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', px: 8, pb: 3 }}>
          <Button
            component={Link}
            to="/profile"
            variant="contained"
            onClick={handleClose}
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
            Войти в профиль
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}