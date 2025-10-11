import { Drawer, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { COLOR } from '../../config/ui/colors';
import CustomeInput from '../../pages/components/Input';

import Register from '../../auth/register/register';
import { toast } from 'react-toastify';

const UserDrawer = ({ open, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    const savedUser = localStorage.getItem('user');

    if (!savedUser) {
      toast.error('Пользователь не найден');
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.phoneNumber === form.phoneNumber &&
      user.password === form.password
    ) {
      onClose();
      toast.success('Регистрация прошла успешно');
    } else {
      toast.error('Неверный номер телефона или пароль');
    }
  };
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{
        sx: {
          width: 346,
          px: '24px',
          pt: '40px',
          position: 'fixed',
        },
      }}
    >
      <Typography
        fontWeight={'500'}
        fontSize={'20px'}
        textAlign={'center'}
        mt={'8px'}
        style={{ color: COLOR['--m3-sys-light-shadow'] }}
      >
        {isRegister ? 'Создать профиль' : 'Войти или создать профиль'}
      </Typography>

      {!isRegister ? (
        <>
          <form onChange={handleChange}>
            <Stack mt={'20px'}>
              <label>
                <Typography
                  mb={'12px'}
                  fontWeight={'400'}
                  fontSize={'16px'}
                  color=" #808080"
                >
                  Номер телефона
                </Typography>
                <CustomeInput
                  name="phoneNumber"
                  withBorder
                  placeholder={'+998'}
                />
              </label>
            </Stack>
            <Stack mt={'20px'}>
              <label>
                <Typography
                  mb={'12px'}
                  fontWeight={'400'}
                  fontSize={'16px'}
                  color=" #808080"
                >
                  Пароль
                </Typography>
                <CustomeInput
                  name="password"
                  withBorder
                  placeholder={'********'}
                />
              </label>
            </Stack>
          </form>

          <IconButton
            onClick={handleLogin}
            sx={{
              backgroundColor: COLOR['--gipermart'],
              maxWidth: '298px',
              width: '100%',
              borderRadius: '1px',
              marginTop: '40px',
              paddingTop: '12px',
              paddingBottom: '12px',
              '&:hover': { bgcolor: '#FDD835', transition: 'all .5s ease' },
            }}
          >
            <Typography
              fontWeight={'500'}
              fontSize={'16px'}
              textAlign={'center'}
              sx={{
                color: COLOR['--m3-sys-light-on-tertiary-container'],
              }}
            >
              Войти
            </Typography>
          </IconButton>
          <IconButton
            onClick={() => setIsRegister(true)}
            style={{
              backgroundColor: 'inherit',
              border: `1px solid ${COLOR['--m3-sys-light-shadow']}`,
              maxWidth: '298px',
              width: '100%',
              borderRadius: '1px',
              marginTop: '16px',
              paddingTop: '12px',
              paddingBottom: '12px',
            }}
          >
            <Typography
              fontWeight={'500'}
              fontSize={'16px'}
              textAlign={'center'}
              style={{ color: COLOR['--m3-sys-light-on-tertiary-container'] }}
            >
              Зарегистрироваться
            </Typography>
          </IconButton>
        </>
      ) : (
        <>
          <Register setIsRegister={setIsRegister} onClose={onClose} />
        </>
      )}

      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          height: '28px',
          pb: '-2px',
        }}
      >
        x
      </IconButton>
    </Drawer>
  );
};

export default UserDrawer;
