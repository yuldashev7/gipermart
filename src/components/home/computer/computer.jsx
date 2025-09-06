import { Stack, Typography } from '@mui/material';
import { COLOR } from '../../../config/ui/colors';

const GetComputer = ({ title, price, img, brand, display }) => {
  return (
    <Stack>
      <Stack direction={'row'} gap={'16px'}>
        <img style={{ maxWidth: '140px' }} src={img} alt="img" />
        <Stack maxWidth={'200px'} mt={'20px'}>
          <Typography fontWeight={'400'} fontSize={'18px'} color="#333">
            {title}
          </Typography>
          <Typography fontWeight={'400'} fontSize={'18px'} color="#333">
            {brand}
          </Typography>
          <Typography
            fontWeight={'600'}
            fontSize={'18px'}
            lineHeight={'150%'}
            style={{ color: COLOR['--m3-sys-light-shadow'] }}
          >
            {price} Сум
          </Typography>
          <Typography
            fontWeight={'400'}
            fontSize={'18px'}
            color="#333"
            mb={'45px'}
          >
            {display}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GetComputer;
