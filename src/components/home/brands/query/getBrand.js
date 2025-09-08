import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../config/data/request';

export const getBrand = () => {
  return useQuery({
    queryKey: ['brand'],
    queryFn: () => request.get('/brand').then((res) => res.data),
  });
};
