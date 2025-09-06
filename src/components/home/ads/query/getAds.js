import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../config/data/request';

export const GetAds = () => {
  return useQuery({
    queryKey: ['ads'],
    queryFn: () => request.get('/ads').then((res) => res.data),
  });
};
