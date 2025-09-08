import { useParams } from 'react-router-dom';
import { getCategory } from './query/getCategory';
import { Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import PhoneBuyIcon from '../../../assets/icons/phone-buy-icon';
import { addProduct } from '../../../store/product-reducer';
import { useDispatch } from 'react-redux';
import { COLOR } from '../../../config/ui/colors';
import { toast } from 'react-toastify';

const Category = () => {
  const { name } = useParams();
  const { data } = getCategory(name);
  const dispatch = useDispatch();

  const addStore = (item) => {
    const newPrice = Number(item.price.split(' ').join(''));
    const product = {
      id: item.id,
      title: item.title,
      price: newPrice,
      img: item.img,
    };
    dispatch(addProduct(product));

    if (newPrice) {
      toast.success('Товар добавлен');
    } else {
      toast.error('Ошибка при добавлении товара');
    }
  };

  return (
    <Container>
      <Grid mt={12} spacing={2} container mb={6}>
        {data?.map((item) => (
          <Grid key={item.id} size={3} mb={'20px'} p={'10px'}>
            <Stack
              sx={{
                height: '100%',
                p: 1,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <img
                width="100%"
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                src={item.img}
                alt={item.title}
              />
              <Stack mt={1} spacing={0.5}>
                <Typography
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="150%"
                  color="#333"
                >
                  {item.title}
                </Typography>
                <Typography
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight="150%"
                  color="#555"
                >
                  {item.rame || ''}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  pr={'20px'}
                >
                  <Typography fontWeight={600} fontSize="18px" color="#333">
                    {item.price} Сум
                  </Typography>
                  <IconButton
                    onClick={() => addStore(item)}
                    sx={{
                      backgroundColor: COLOR['--gipermart'],
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: '#e0d800',
                        transform: 'scale(1.1)',
                      },
                      transition: 'transform 0.3s, background-color 0.3s',
                    }}
                  >
                    <PhoneBuyIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Category;
