import {
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import headerLogo from '../../assets/svg/header.svg';
import { COLOR } from '../../config/ui/colors';
import TopHeaderTel from '../../assets/icons/topHeaderTel';
import HeaderHamburger from '../../assets/icons/headerHamburger';
import CustomeInput from '../../pages/components/Input';
import SearchIcon from '../../assets/icons/search-icon';
import UserIcon from '../../assets/icons/user-icon';
import HeartIcon from '../../assets/icons/heart-icon';
import BuyIcon from '../../assets/icons/buy-icon';
import BannerSwiper from '../../components/swiper/swiper';
import { getBanner } from '../data/query/getQuery';
import { Link } from 'react-router-dom';
import React from 'react';
import UserDrawer from '../../components/user-modal/user-drawer';

const Header = () => {
  const { data, isLoading } = getBanner();
  const [userOpen, setUserOpen] = React.useState(false);

  if (isLoading)
    return (
      <>
        <Stack mt={'120px'}>
          <Skeleton variant="rectangular" width="100%" height={400} />
        </Stack>
      </>
    );

  return (
    <>
      <Stack
        direction="row"
        gap="32px"
        justifyContent="right"
        mr="60px"
        py="10px"
        bgcolor={COLOR['--m3-sys-light-background']}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Доставка и оплата
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Пункты выдачи
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Поддержка
        </Typography>
        <a
          href="tel:998902537753"
          style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}
        >
          <TopHeaderTel />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: COLOR['--m3-sys-light-on-background'],
            }}
          >
            +998 90 253 77 53
          </Typography>
        </a>
      </Stack>

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: COLOR['--m3-sys-light-background'],
          zIndex: 1100,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" gap="32px" py="16px">
            <Link to={'/'}>
              <img
                style={{ maxWidth: '139px', marginTop: '12px' }}
                src={headerLogo}
                alt="logo"
              />
            </Link>

            <Button>
              <Stack
                direction="row"
                alignItems="center"
                gap="15px"
                bgcolor={COLOR['--gipermart']}
                maxWidth="158px"
                py="10px"
                pl="12px"
                pr="30px"
              >
                <HeaderHamburger />
                <Typography
                  fontWeight="400"
                  fontSize="20px"
                  sx={{ color: COLOR['--m3-sys-light-on-tertiary-container'] }}
                >
                  Каталог
                </Typography>
              </Stack>
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              maxWidth={'600px'}
              width={'100%'}
              ml={'32px'}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '16px',
                  maxWidth: '600px',
                  width: '100%',
                  border: `1px solid ${COLOR['--m3-sys-light-outline']}`,
                }}
              >
                <CustomeInput placeholder="Поиск" />
                <SearchIcon />
              </label>
            </Stack>

            <Stack direction="row" alignItems="center" gap="32px">
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton onClick={() => setUserOpen(true)}>
                  <UserIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Войти
                </Typography>
              </Stack>
              <UserDrawer open={userOpen} onClose={() => setUserOpen(false)} />
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton>
                  <HeartIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Избранное
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" gap="4px">
                <IconButton>
                  <BuyIcon />
                </IconButton>
                <Typography
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="100%"
                  sx={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Корзина
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
