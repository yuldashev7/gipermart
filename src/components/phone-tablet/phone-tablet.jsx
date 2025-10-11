import { Stack, Typography } from '@mui/material';
import { COLOR } from '../../config/ui/colors';

const PhoneTablet = ({ img, title, rame, price }) => {
  return (
    <Stack>
      <Stack direction={'row'}>
        <img style={{ maxWidth: '140px' }} src={img} alt="img" />
        <Stack>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            color="#333"
            mt={'5px'}
          >
            {title}
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            color="#333"
            mb={'45px'}
          >
            {rame}
          </Typography>
          <Typography
            fontWeight={'600'}
            fontSize={'18px'}
            lineHeight={'150%'}
            style={{ color: COLOR['--m3-sys-light-shadow'] }}
          >
            {price} Сум
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PhoneTablet;
