import { Drawer, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLOR } from '../../config/ui/colors';
import CustomeInput from '../../pages/components/Input';

const UserDrawer = ({ open, onClose }) => {
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
        Войти или создать профиль
      </Typography>

      <form>
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
            <CustomeInput withBorder placeholder={'+998'} />
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
            <CustomeInput withBorder placeholder={'********'} />
          </label>
        </Stack>

        <IconButton
          style={{
            backgroundColor: COLOR['--gipermart'],
            maxWidth: '298px',
            width: '100%',
            borderRadius: '1px',
            marginTop: '40px',
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
            Войти
          </Typography>
        </IconButton>

        <IconButton
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
      </form>

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
