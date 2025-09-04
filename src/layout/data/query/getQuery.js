import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/data/request';
export const getBanner = () => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: () => request.get('/banners').then((res) => res.data),
  });
};
