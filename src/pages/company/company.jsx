import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR } from '../../config/ui/colors';

const Company = () => {
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

      <Typography
        fontWeight={'400'}
        fontSize={'24px'}
        lineHeight={'120%'}
        color="#333"
        mb={'24px'}
      >
        О компании
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Разместите на этой странице информацию с описанием вашего магазина.
      </Typography>
      <Typography>Например:</Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Интернет-магазин "MyShop.ru" – лучшие товары по низким ценам!
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Мы рады предложить вам недорогие, но качественные товары с подробными
        описаниями, характеристиками и фотографиями. У нас Вы можете купить
        замечательные товары: технику, электронику, одежду, обувь, игрушки,
        книги и многое другое в вашем регионе по ценам производителей и без
        наценки.
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Продажа большого ассортимента разнообразных товаров – основная
        специализация нашего интернет-магазина. Мы доставим ваш заказ бесплатно
        в любой уголок мира, осуществим подробную консультацию по товарам и
        поможем с выбором.
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Магазин "MyShop.ru" предлагает Вам купить качественную и доступную
        технику, электронику, одежду, обувь, игрушки, книги и многое другое с
        доставкой! Все виды современных товаров от эконом класса до более
        дорогих представлены в нашем каталоге.
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'16px'}
        color="#333"
        lineHeight={'150%'}
        mb={'16px'}
      >
        Вы можете купить любые товары в вашем городе: технику, электронику,
        одежду, обувь, игрушки, книги и многое другое.
      </Typography>
      <Typography
        fontWeight={'500'}
        fontSize={'16px'}
        lineHeight={'150%'}
        color="#333"
        mb={'16px'}
      >
        Наши главные преимущества:
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Низкие цены от производителей
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Доставка по городу в день заказа
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Доставка заказов Почтой по всей Стране за 5-15 дней
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Только оригинальная и сертифицированная продукция
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Гарантия на все товары – 5 лет!
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
      >
        Не понравился товар? Вернем или обменяем в течение 14-ти дней без
        оформления лишних бумаг!
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        ml={'40px'}
        mb={'56px'}
      >
        Бонусы и скидки для постоянных покупателей
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
      >
        Эту страницу можно отредактировать в бэк-офисе сайта в разделе
        <Link
          style={{
            textDecoration: 'none',
            color: COLOR['--m3-sys-light-primary'],
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '160%',
            marginLeft: '5px',
          }}
        >
          Меню и страницы
        </Link>
      </Typography>
      <Typography
        fontWeight={'400'}
        fontSize={'15px'}
        lineHeight={'160%'}
        color="#333"
        mb={'64px'}
        mt={'16px'}
      >
        Подробнее о создании текстовых страниц и меню, читайте в документации:
        <Link
          style={{
            textDecoration: 'none',
            color: COLOR['--m3-sys-light-primary'],
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '160%',
            marginLeft: '5px',
          }}
        >
          https://www.Gipermart.ru/collection/doc-settings/product/razdel-menyu
        </Link>
      </Typography>
    </Container>
  );
};

export default Company;
