import {
  Button,
  Container,
  IconButton,
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
import Swiper from '../../components/swiper/swiper';
import { getBanner } from '../data/query/getQuery';
import BannerSwiper from '../../components/swiper/swiper';

const Header = () => {
  const { data, isLoading } = getBanner();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Stack
        direction={'row'}
        gap={'32px'}
        justifyContent={'right'}
        mr={'60px'}
        py={'10px'}
        bgcolor={COLOR['--m3-sys-light-background']}
      >
        <Typography
          style={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Доставка и оплата
        </Typography>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Пункты выдачи
        </Typography>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            color: COLOR['--m3-sys-light-on-background'],
          }}
        >
          Поддержка
        </Typography>

        <a
          style={{ display: 'flex', gap: '16px', textDecoration: 'none' }}
          href="tel:998902537753"
        >
          <TopHeaderTel />
          <Typography
            style={{
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
      <Container>
        <header style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <Stack direction={'row'} alignItems={'center'} gap={'32px'}>
            <img style={{ maxWidth: '139px' }} src={headerLogo} alt="" />
            <Button>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'15px'}
                bgcolor={COLOR['--gipermart']}
                maxWidth={'158px'}
                py={'10px'}
                pl={'12px'}
                pr={'30px'}
              >
                <HeaderHamburger />
                <Typography
                  fontWeight={'400'}
                  fontSize={'20px'}
                  style={{
                    color: COLOR['--m3-sys-light-on-tertiary-container'],
                  }}
                >
                  Каталог
                </Typography>
              </Stack>
            </Button>
            <Stack
              direction={'row'}
              alignItems={'center'}
              pr={'16px'}
              sx={{
                maxWidth: 600,
                width: '100%',
                border: `1px solid ${COLOR['--m3-sys-light-outline']}`,
              }}
            >
              <CustomeInput placeholder="Поиск" />
              <SearchIcon />
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={'32px'}>
              <Stack direction={'column'} alignItems={'center'} gap={'4px'}>
                <IconButton>
                  <UserIcon />
                </IconButton>
                <Typography
                  fontSize={'16px'}
                  fontWeight={'400'}
                  lineHeight={'100%'}
                  style={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Войти
                </Typography>
              </Stack>
              <Stack direction={'column'} alignItems={'center'} gap={'4px'}>
                <IconButton>
                  <HeartIcon />
                </IconButton>
                <Typography
                  fontSize={'16px'}
                  fontWeight={'400'}
                  lineHeight={'100%'}
                  style={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Войти
                </Typography>
              </Stack>
              <Stack direction={'column'} alignItems={'center'} gap={'4px'}>
                <IconButton>
                  <BuyIcon />
                </IconButton>
                <Typography
                  fontSize={'16px'}
                  fontWeight={'400'}
                  lineHeight={'100%'}
                  style={{ color: COLOR['--m3-sys-light-on-background'] }}
                >
                  Войти
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <BannerSwiper data={data} />
        </header>
      </Container>
    </>
  );
};

export default Header;
