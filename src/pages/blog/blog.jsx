import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import headPhoneImg from '../../assets/img/headPhone.png';
import macBookImg from '../../assets/img/macBook.png';
import iPhoneImg from '../../assets/img/Iphone.png';

const Blog = () => {
  return (
    <Container>
      <Stack
        mt="58px"
        direction="row"
        justifyContent="space-between"
        px="20px"
        mb="20px"
        bgcolor={'#fff'}
        py={'12px'}
      >
        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Смартфоны и планшеты
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Ноутбуки, планшеты и компьютеры
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Техника для дома
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Игры и развлечения
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Телевизоры, Аудио-видео, Hi-Fi
          </Typography>
        </Link>

        <Link style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="150%"
            color="#333"
            sx={{
              transition: 'color 0.3s ease',
              '&:hover': { color: 'red' },
            }}
          >
            Фото и видеотехника
          </Typography>
        </Link>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={'5px'} mb={'36px'}>
        <Link
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            color: '#333',
            textDecoration: 'none',
          }}
          to={'/'}
        >
          Главная
        </Link>
        <Typography
          fontWeight={'500'}
          fontSize={'16px'}
          lineHeight={'150%'}
          color="#333"
        >
          / Блог
        </Typography>
      </Stack>
      <Stack direction={'row'} gap={'32px'} mb={'32px'}>
        <img src={headPhoneImg} alt="img" />
        <Box>
          <Typography
            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={'150%'}
            color="#999"
            mb={'16px'}
          >
            27.04.2021
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'24px'}
            lineHeight={'117%'}
            color="#333"
            mb={'16px'}
          >
            Обзор JBL Club Pro+
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            lineHeight={'133%'}
            color="#333"
          >
            Полностью беспроводные наушники с активным шумоподавлением —
            абсолютный must have для любого уважающего себя аудиобренда. Сегодня
            познакомимся с моделью Club Pro+ — флагманом в линейке TWS компании
            JBL. Её создавали в партнёрстве с известными диджеями и музыкантами,
            и, на наш взгляд, результат получился крайне интересным. Наушники
            JBL: роскошная коробка, крупный размер, но при этом удобная посадка
            Как это и заведено у JBL, гаджет начинает радовать уже на этапе
            знакомства с коробкой. Она сделана из плотного картона, оформлена в
            фирменных чёрно-оранжевых цветах, полиграфия просто шикарная. Крышка
            крепится к основной части магнитом. Если рассматривать устройство в
            качестве подарка, то это явно тот...
          </Typography>
        </Box>
      </Stack>
      <Stack direction={'row'} gap={'32px'} mb={'32px'}>
        <img src={macBookImg} alt="img" />
        <Box>
          <Typography
            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={'150%'}
            color="#999"
            mb={'16px'}
          >
            20.07.2017
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'24px'}
            lineHeight={'117%'}
            color="#333"
            mb={'16px'}
          >
            Windows 10 станет возможным запускать на Apple M1 Mac
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            lineHeight={'133%'}
            color="#333"
          >
            Компания Parallels, которая специализируется на разработке
            программного обеспечения, выпустила обновление для своего пакета
            Parallels Desktop 16.5. Он получил встроенную поддержку запуска
            Windows на процессорах Arm, которые устанавливаются на компьютеры
            Apple Mac M1. Эта новость особенно актуальна в свете того, что в
            июне прошлого года стало известно о том, что на маках с процессорами
            Arm станет невозможно запускать Windows через клиент Boot Camp. Как
            пишет The Verge, новейшая версия Parallels Desktop позволяет
            запускать Windows 10 в приложениях Arm или традиционных приложениях
            x86 наряду с традиционными приложениями Mac. Также разработчикам
            Parallels удалось повысить производительность примерно на 30% и в
            2,5 раза улучшить...
          </Typography>
        </Box>
      </Stack>
      <Stack direction={'row'} gap={'32px'} mb={'64px'}>
        <img src={headPhoneImg} alt="img" />
        <Box>
          <Typography
            fontWeight={'400'}
            fontSize={'16px'}
            lineHeight={'150%'}
            color="#999"
            mb={'16px'}
          >
            31.01.2016
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'24px'}
            lineHeight={'117%'}
            color="#333"
            mb={'16px'}
          >
            Apple iPhone 12 выходит в фиолетовом цвете
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            lineHeight={'133%'}
            color="#333"
          >
            Пока новые цвета будут доступны для iPhone 12 и iPhone 12 Mini. В
            России предзаказ модели фиолетового цвета откроется 23 апреля, а
            продажи новинки стартуют 30 апреля. Чуть позже также появятся
            аксессуары в цвете ColorWay. Изначально iPhone 12 и iPhone 12 Mini
            были доступны в белом, чёрном, синем, зелёном и красном цветах. Оба
            устройства, которые вышли осенью прошлого года, получили новейший
            чип Apple A14 bionic, 4 ГБ оперативной памяти, дисплей Super Retina
            XDR и керамическую заднюю панель. Благодаря ей, по утверждению
            компании, риск повреждений при падении снизился втрое.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Blog;
