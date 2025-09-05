import { Container, Stack, Typography } from '@mui/material';
import footerLogo from '../../assets/svg/footer.svg';
import facebookLogo from '../../assets/svg/facebook.svg';
import okLogo from '../../assets/svg/ok.svg';
import vkLogo from '../../assets/svg/vk.svg';
import youTubeLogo from '../../assets/svg/you-tube.svg';
import instagramLogo from '../../assets/svg/instagram.svg';
import { Link } from 'react-router-dom';
import payMeLogo from '../../assets/svg/payme.svg';
import uzCardLogo from '../../assets/svg/uzcard.svg';
import humoLogo from '../../assets/svg/humo.svg';

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: ' #f5f5f6',
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingRight: '50px',
          paddingLeft: '20px',
        }}
      >
        <Container>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack>
              <img style={{ maxWidth: '100px' }} src={footerLogo} alt="img" />
              <a
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#333',
                  marginBottom: '2px',
                }}
                href="tel:998933746644"
              >
                +99 893 374-66-44
              </a>
              <Typography
                fontWeight={'400'}
                fontSize={'14px'}
                color="#333"
                mb={'12px'}
              >
                справочная служба
              </Typography>
              <a
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#333',
                  marginBottom: '2px',
                }}
                href="tel:998902537753"
              >
                +99 890 253-77-53
              </a>
              <Typography
                fontWeight={'400'}
                fontSize={'14px'}
                color="#333"
                mb={'12px'}
              >
                интернет-магазин
              </Typography>
              <Typography
                fontWeight={'600'}
                fontSize={'14px'}
                color="#333"
                mb={'12px'}
              >
                Оставайтесь на связи
              </Typography>
              <Stack direction={'row'} gap={'16px'}>
                <img
                  style={{ maxWidth: '50px' }}
                  src={facebookLogo}
                  alt="Facebook"
                />
                <img style={{ maxWidth: '50px' }} src={okLogo} alt="Ok" />
                <img style={{ maxWidth: '50px' }} src={vkLogo} alt="Vk" />
                <img
                  style={{ maxWidth: '50px' }}
                  src={youTubeLogo}
                  alt="You Tube"
                />
                <img
                  style={{ maxWidth: '50px' }}
                  src={instagramLogo}
                  alt="Instagram"
                />
              </Stack>
            </Stack>
            <Stack>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Условия обмена и возврата
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Каталог
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                О компании
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Контакты
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Доставка
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                }}
              >
                Оплата
              </Link>
            </Stack>
            <Stack>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Клиентам
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Личный кабинет
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Блог
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Обратная связь
              </Link>
            </Stack>
            <Stack>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Информация
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Пользовательское соглашение
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                Политика конфиденциальности и оферта
              </Link>
            </Stack>
          </Stack>
        </Container>
      </footer>
      <Stack bgcolor={'#eaeaea'} py={'24px'} pl={'20px'} pr={'20px'}>
        <Container>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography
              fontWeight={'400'}
              fontSize={'14px'}
              lineHeight={'143%'}
              color="#333"
            >
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </Typography>
            <Stack direction={'row'} gap={'24px'}>
              <Link>
                <img style={{ maxWidth: '64px' }} src={payMeLogo} alt="PayMe" />
              </Link>
              <Link>
                <img
                  style={{ maxWidth: '17px' }}
                  src={uzCardLogo}
                  alt="UzCard"
                />
              </Link>
              <Link>
                <img style={{ maxWidth: '40px' }} src={humoLogo} alt="Humo" />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Footer;
