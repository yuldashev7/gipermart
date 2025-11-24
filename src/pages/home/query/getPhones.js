import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/data/request';

export const useGetPhone = () => {
  return useQuery({
    queryKey: ['getPhone'],
    queryFn: () => request.get('/phones').then((res) => res.data),
  });
};
