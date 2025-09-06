import { request } from '../../../../config/data/request';
import { useQuery } from '@tanstack/react-query';

export const getComputer = () => {
  return useQuery({
    queryKey: ['computer'],
    queryFn: () => request.get('/computers').then((res) => res.data),
  });
};
