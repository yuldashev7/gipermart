import { IconButton, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PhoneBuyIcon from '../../assets/icons/phone-buy-icon';
import { COLOR } from '../../config/ui/colors';
import { addProduct } from '../../store/product-reducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Phones = ({
  img,
  title,
  price,
  showOldPrice = true,
  isMargin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addStore = () => {
    const newPrice = Number(price.split(' ').join(''));
    const product = { id, title, price: newPrice, img };
    dispatch(addProduct(product));

    if (newPrice) {
      toast.success("Mahsulot Qo'shildi");
    } else {
      toast.error("Mahsulot Qo'shishda Xatolik");
    }
  };

  return (
    <Stack>
      <Link
        to={`product/${id}`}
        style={{
          textDecoration: 'none',
          marginBottom: isMargin ? 2 : 0,
          marginTop: '14px',
          color: '#333',
        }}
      >
        <img style={{ maxWidth: '165px' }} src={img} alt="img" />
        <Typography variant="text2">{title}</Typography>
      </Link>

      {showOldPrice && (
        <Typography
          fontWeight={'400'}
          fontSize={'14px'}
          color="#999"
          style={{ textDecoration: 'line-through' }}
        >
          74 990 Сум
        </Typography>
      )}

      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography fontWeight={'600'} fontSize={'18px'}>
          {price} Сум
        </Typography>

        <IconButton
          onClick={addStore}
          sx={{
            backgroundColor: COLOR['--gipermart'],
            borderRadius: '0',
            '&:hover': {
              backgroundColor: '#e0d800',
              transform: 'scale(1.05)',
            },
          }}
        >
          <PhoneBuyIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Phones;
