import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/data/request';

export const getCatalog = () => {
  return useQuery({
    queryKey: ['catalog'],
    queryFn: () => request.get('/catalog').then((res) => res.data),
  });
};
