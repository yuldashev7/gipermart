import { TextField } from '@mui/material';
import React from 'react';
import { COLOR } from '../../config/ui/colors';

const CustomeInput = ({
  type = 'text',
  placeholder,
  label,
  onChange,
  withBorder = false,
  value,
  ...props
}) => {
  return (
    <TextField
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: withBorder
              ? `1px solid ${COLOR['--m3-sys-light-outline']}`
              : 'none',
          },
          '&:hover fieldset': {
            border: withBorder
              ? `1px solid ${COLOR['--m3-sys-light-outline']}`
              : 'none',
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
      value={value}
      {...props}
    />
  );
};

export default CustomeInput;
