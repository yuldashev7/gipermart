import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/data/request';

export const getPhoneTablet = () => {
  return useQuery({
    queryKey: ['phone-tablet'],
    queryFn: () => request.get('/phones').then((res) => res.data),
  });
};
