import { request } from '../../../../../config/data/request';
import { useQuery } from '@tanstack/react-query';

export const GetHomeComputer = () => {
  return useQuery({
    queryKey: ['home-computer'],
    queryFn: () => request.get('/computers').then((res) => res.data),
  });
};
