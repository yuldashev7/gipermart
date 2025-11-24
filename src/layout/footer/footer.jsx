import okLogo from '../../assets/svg/ok.svg';
import vkLogo from '../../assets/svg/vk.svg';
import { Link, NavLink } from 'react-router-dom';
import humoLogo from '../../assets/svg/humo.svg';
import payMeLogo from '../../assets/svg/payme.svg';
import uzCardLogo from '../../assets/svg/uzcard.svg';
import footerLogo from '../../assets/svg/footer.svg';
import youTubeLogo from '../../assets/svg/you-tube.svg';
import facebookLogo from '../../assets/svg/facebook.svg';
import instagramLogo from '../../assets/svg/instagram.svg';
import { Container, Stack, Typography } from '@mui/material';

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
              <Typography
                component={'a'}
                href="tel:998933746644"
                sx={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#333',
                  marginBottom: '2px',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'red' },
                }}
              >
                +99 893 374-66-44
              </Typography>
              <Typography
                fontWeight={'400'}
                fontSize={'14px'}
                color="#333"
                mb={'12px'}
              >
                справочная служба
              </Typography>
              <Typography
                component={'a'}
                href="tel:998933746644"
                sx={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '21px',
                  color: '#333',
                  marginBottom: '2px',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'red' },
                }}
              >
                +99 890 253-77-53
              </Typography>
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
                <Link>
                  <img
                    style={{ maxWidth: '50px' }}
                    src={facebookLogo}
                    alt="Facebook"
                  />
                </Link>
                <Link>
                  <img style={{ maxWidth: '50px' }} src={okLogo} alt="Ok" />
                </Link>
                <Link>
                  <img style={{ maxWidth: '50px' }} src={vkLogo} alt="Vk" />
                </Link>
                <Link>
                  <img
                    style={{ maxWidth: '50px' }}
                    src={youTubeLogo}
                    alt="You Tube"
                  />
                </Link>
                <Link>
                  <img
                    style={{ maxWidth: '50px' }}
                    src={instagramLogo}
                    alt="Instagram"
                  />
                </Link>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Условия обмена и возврата
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Каталог
                </Typography>
              </Link>
              <NavLink
                to={'/company'}
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                {({ isActive }) => (
                  <Typography
                    sx={{
                      color: isActive ? 'red' : '',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    О компании
                  </Typography>
                )}
              </NavLink>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Контакты
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Доставка
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Оплата
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Клиентам
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Личный кабинет
                </Typography>
              </Link>
              <NavLink
                to={'/blog'}
                style={{
                  textDecoration: 'none',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '143%',
                  color: '#333',
                  marginBottom: '16px',
                }}
              >
                {({ isActive }) => (
                  <Typography
                    sx={{
                      color: isActive ? 'red' : '#333',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    Блог
                  </Typography>
                )}
              </NavLink>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Обратная связь
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Информация
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Пользовательское соглашение
                </Typography>
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
                <Typography
                  sx={{
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'red' },
                  }}
                >
                  Политика конфиденциальности и оферта
                </Typography>
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
