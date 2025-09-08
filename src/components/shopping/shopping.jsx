import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteBtn from '../../assets/icons/delete-btn';
import PlusIcon from '../../assets/icons/plus-icon';
import MinusIcon from '../../assets/icons/minus-icon';
import { useDispatch } from 'react-redux';
import {
  decrementPrice,
  incrementPrice,
  removeProduct,
} from '../../store/product-reducer';
import { toast } from 'react-toastify';
import { formatter } from '../../config/ui/summation-price';

const Shopping = ({ product, totalPrice }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    if (product?.id) {
      dispatch(removeProduct(product.id));
      toast.success('Товар удалён', {
        autoClose: 2000,
      });
    } else {
      toast.error('Произошла ошибка', {
        autoClose: 2000,
      });
    }
  };
  return (
    <Container disableGutters>
      <Stack>
        <Stack
          style={{ border: '2px solid  #ededed' }}
          direction={'row'}
          justifyContent={'space-between'}
          pr={'50px'}
          mb={'24px'}
          pt={'20px'}
        >
          <Stack direction={'row'} mb={'24px'}>
            <img src={product.img} alt="img" />
            <Stack>
              <Typography
                fontWeight={'500'}
                fontSize={'24px'}
                lineHeight={'150%'}
                color="#333"
                mt={'10px'}
              >
                {product.title}
              </Typography>
              <IconButton
                onClick={deleteProduct}
                style={{
                  borderRadius: '4px',
                  maxWidth: '90px',
                  height: '30px',
                  marginTop: '10px',
                  marginLeft: '120px',
                }}
              >
                <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                  <DeleteBtn />
                  <Typography>Удалить</Typography>
                </Stack>
              </IconButton>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              fontWeight={'600'}
              fontSize={'24px'}
              lineHeight={'150%'}
              color="#333"
            >
              {formatter(product.userPrice)} Сум
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={'2px'}
              bgcolor={'#EDEDED'}
              mt={'10px'}
              height={'40px'}
              width={'130px'}
            >
              <IconButton
                onClick={() => dispatch(decrementPrice({ id: product.id }))}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '0',
                  width: '40px',
                  height: '36px',
                }}
              >
                <MinusIcon />
              </IconButton>
              <Typography>{product.count}</Typography>
              <IconButton
                onClick={() => dispatch(incrementPrice({ id: product.id }))}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '0',
                  width: '40px',
                  height: '36px',
                }}
              >
                <PlusIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Shopping;
