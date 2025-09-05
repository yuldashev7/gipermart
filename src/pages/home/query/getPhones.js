import { request } from '../../../config/data/request';
import { useQuery } from '@tanstack/react-query';

export const useGetPhone = () => {
  return useQuery({
    queryKey: ['getPhone'],
    queryFn: () => request.get('/phones').then((res) => res.data),
  });
};
