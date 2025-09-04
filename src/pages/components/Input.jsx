import { TextField } from '@mui/material';
import React from 'react';
import { COLOR } from '../../config/ui/colors';

const CustomeInput = ({
  type = 'text',
  placeholder,
  label,
  onChange,
  ...props
}) => {
  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            borderColor: COLOR['--m3-sys-light-outline'],
          },
        },
      }}
      fullWidth
      label={label}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default CustomeInput;
