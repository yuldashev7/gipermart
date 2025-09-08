import { request } from '../../../config/data/request';
import { useQuery } from '@tanstack/react-query';

export const getCatalog = () => {
  return useQuery({
    queryKey: ['catalog'],
    queryFn: () => request.get('/catalog').then((res) => res.data),
  });
};
