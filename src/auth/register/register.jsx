import { IconButton, Stack, Typography } from '@mui/material';
import CustomeInput from '../../pages/components/Input';
import { COLOR } from '../../config/ui/colors';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = ({ setIsRegister, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = () => {
    if (!form.name || !form.phoneNumber || !form.password) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }
    localStorage.setItem('user', JSON.stringify(form));
    setIsRegister(false);
  };

  return (
    <form onChange={handleChange}>
      <div>
        <Stack mt={'20px'}>
          <label>
            <Typography
              mb={'12px'}
              fontWeight={'400'}
              fontSize={'16px'}
              color=" #808080"
            >
              Имя
            </Typography>
            <CustomeInput name="name" withBorder placeholder={'Введите имя'} />
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
              Номер телефона
            </Typography>
            <CustomeInput name="phoneNumber" withBorder placeholder={'+998'} />
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
            <CustomeInput name="password" withBorder placeholder={'********'} />
          </label>
        </Stack>
        <IconButton
          onClick={handleRegister}
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
        <IconButton
          onClick={() => setIsRegister(false)}
          sx={{
            backgroundColor: '#f44336',
            border: `1px solid ${COLOR['--m3-sys-light-shadow']}`,
            maxWidth: '298px',
            width: '100%',
            borderRadius: '1px',
            marginTop: '16px',
            paddingTop: '12px',
            paddingBottom: '12px',
            '&:hover': {
              bgcolor: '#d32f2f',
              transition: 'all .5s ease',
            },
          }}
        >
          <Typography
            fontWeight={'500'}
            fontSize={'16px'}
            textAlign={'center'}
            style={{
              color: '#fff',
            }}
          >
            Назад
          </Typography>
        </IconButton>
      </div>
    </form>
  );
};
export default Register;
