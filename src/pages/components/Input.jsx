import { TextField } from '@mui/material';
import { COLOR } from '../../config/ui/colors';

const CustomeInput = ({
  type = 'text',
  placeholder,
  label,
  onChange,
  withBorder = false,
  value,
  name,
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
      name={name}
      {...props}
    />
  );
};

export default CustomeInput;
