import { getCatalog } from '../../components/query/getQuey';
import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import HomeSwiper from '../../components/home/swiper/homeSwiper';
import PhoneSwiper from '../../components/phones/phoneSwiper';
import BannerSwiper from '../../components/swiper/swiper';
import { getBanner } from '../../layout/data/query/getQuery';
import { COLOR } from '../../config/ui/colors';
import Ads from '../../components/home/ads/ads';
import { GetAds } from '../../components/home/ads/query/getAds';
import { getPhoneTablet } from '../../components/phone-tablet/query/getPhoneTablet';
import PhoneTablet from '../../components/phone-tablet/phone-tablet';
import { getComputer } from '../../components/home/computer/query/getComputer';
import GetComputer from '../../components/home/computer/computer';
import { GetHomeComputer } from '../../components/home/computer/homeComputer/query/homeComputer';
import HomeComputer from '../../components/home/computer/homeComputer/homeComputer';
import { getBrand } from '../../components/home/brands/query/getBrand';
import Brands from '../../components/home/brands/brands';

const Home = () => {
  const { isLoading } = getCatalog();
  const { data: bannerData } = getBanner();
  const { data } = GetAds();
  const { data: phoneData } = getPhoneTablet();
  const { data: computerData } = getComputer();
  const { data: HomeComputerData } = GetHomeComputer();
  const { data: brandData } = getBrand();

  return (
    <>
      <Box mt="80px">
        <BannerSwiper data={bannerData} />
      </Box>
      <Container>
        <Grid container my={4} gap={'21px'}>
          <Grid>
            <HomeSwiper />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Stack mb={'28px'} mt={'40px'} ml={'-30px'}>
          <Typography
            fontWeight={'600'}
            fontSize={'24px'}
            lineHeight={'150%'}
            color="#333"
            ml={'40px'}
          >
            Смартфоны и планшеты
          </Typography>

          <Grid container mt={'24px'} ml={'40px'}>
            <Grid>
              <PhoneSwiper />
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Stack bgcolor={'#00cbfe'} pt={'16px'} pb={'30px'}>
        <Container>
          <Typography
            style={{ color: COLOR['--m3-sys-light-on-tertiary-container'] }}
            fontWeight={'600'}
            fontSize={'24px'}
            lineHeight={'150%'}
            mb={'24px'}
          >
            Акции
          </Typography>
          <Grid container gap={'50px'} justifyContent={'center'}>
            {data?.map((item) => (
              <Grid key={item.id} size={3}>
                <Ads {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        px={'20px'}
        pt={'60px'}
      >
        <Typography
          borderBottom={'2px solid #ededed'}
          maxWidth={'350px'}
          width={'100%'}
          mb={'24px'}
          pb={'14px'}
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'150%'}
          color="#333"
        >
          Смартфоны и планшеты
        </Typography>
        <Typography
          borderBottom={'2px solid #ededed'}
          maxWidth={'350px'}
          width={'100%'}
          mb={'24px'}
          pb={'14px'}
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'150%'}
          color="#333"
        >
          Ноутбуки, планшеты и компьютеры
        </Typography>
        <Typography
          borderBottom={'2px solid #ededed'}
          maxWidth={'350px'}
          width={'100%'}
          mb={'24px'}
          pb={'14px'}
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'150%'}
          color="#333"
        >
          Смартфоны и планшеты
        </Typography>
      </Stack>
      <Container>
        <Grid container justifyContent={'space-between'} ml={'-30px'}>
          <Grid>
            {phoneData?.slice(22, 25).map((item) => (
              <PhoneTablet key={item.id} {...item} />
            ))}
          </Grid>
          <Grid ml={'80px'}>
            {computerData?.slice(16, 19).map((item) => (
              <GetComputer key={item.id} {...item} />
            ))}
          </Grid>
          <Grid mr={'60px'}>
            {phoneData?.slice(16, 19).map((item) => (
              <PhoneTablet key={item.id} {...item} />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container disableGutters>
        <Typography
          fontWeight={'600'}
          fontSize={'24px'}
          lineHeight={'150%'}
          color="#333"
          mt={'48px'}
          pl={'30px'}
        >
          Смартфоны и планшеты
        </Typography>
        <Stack ml={'-35px'} mb={'48px'}>
          <Grid container mt={'24px'} ml={'40px'}>
            <Grid>
              <PhoneSwiper />
            </Grid>
          </Grid>
        </Stack>
        <Typography
          fontWeight={'600'}
          fontSize={'24px'}
          lineHeight={'150%'}
          color="#333"
          mt={'48px'}
          mb={'24px'}
          pl={'30px'}
        >
          Ноутбуки, планшеты и компьютеры
        </Typography>
        <Grid
          container
          spacing={2}
          mb="100px"
          mx="20px"
          justifyContent={'space-between'}
        >
          {HomeComputerData?.slice(0, 5).map((item) => (
            <Grid item xs={12} sm={6} md={2.4} key={item.id}>
              <HomeComputer {...item} display={item.details.display} />
            </Grid>
          ))}
        </Grid>
        <Typography
          fontWeight={'600'}
          fontSize={'24px'}
          lineHeight={'150%'}
          color="#333"
          mt={'48px'}
          mb={'24px'}
          pl={'30px'}
        >
          Популярные бренды
        </Typography>
        <Grid container spacing={1} mb={'114px'} px={'20px'}>
          {brandData?.map((item) => (
            <Grid size={2} key={item.id}>
              <Brands {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
