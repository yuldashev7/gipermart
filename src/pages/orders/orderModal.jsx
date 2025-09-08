import { Dialog, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { COLOR } from '../../config/ui/colors';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { generateOrderId } from './OrderId';

const OrderModal = ({ open, onClose }) => {
  const [orderId, setOrderId] = React.useState(null);

  useEffect(() => {
    if (open) {
      setOrderId(Math.floor(100000 + Math.random() * 900000));
    }
  }, [open]);

  const handlePay = () => {
    toast.success('Оплата прошла успешно!');
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          maxWidth: '600px',
          px: '56px',
          py: '40px',
          textAlign: 'center',
        },
      }}
    >
      <Typography
        style={{
          color: COLOR['--m3-sys-light-shadow'],
          fontWeight: '500',
          fontSize: '25px',
          marginBottom: '24px',
        }}
      >
        Заказ №: <span style={{ fontWeight: '300' }}>{orderId}</span> оформлен
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'18px'}
        color=" #818189"
        mb={'24px'}
      >
        Отслеживать статус заказа можно
        <Link style={{ textDecoration: 'none', color: '#ee1537' }}>
          в личном кабинете
        </Link>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          mt={'44px'}
        >
          <IconButton
            onClick={() => {
              handlePay();
            }}
            style={{
              backgroundColor: COLOR['--gipermart'],
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingLeft: '22px',
              paddingRight: '22px',
              borderRadius: '0',
            }}
          >
            <Typography
              style={{
                fontWeight: '400',
                fontSize: '18px',
                color: COLOR['--m3-sys-light-shadow'],
              }}
            >
              ОПЛАТИТЬ
            </Typography>
          </IconButton>
          <IconButton
            onClick={() => onClose(false)}
            style={{
              borderRadius: '0',
            }}
          >
            <Typography
              style={{
                fontWeight: '400',
                fontSize: '18px',
                color: COLOR['--m3-sys-light-shadow'],
              }}
            >
              ПРОДОЛЖИТЬ ПОКУПКИ
            </Typography>
          </IconButton>
        </Stack>
      </Typography>
    </Dialog>
  );
};

export default OrderModal;
