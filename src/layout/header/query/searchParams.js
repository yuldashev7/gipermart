import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/data/request';

export const searchParams = (key = '') => {
  return useQuery({
    queryKey: ['search', key],
    queryFn: () =>
      request
        .get('/all', {
          params: key ? { q: key } : {},
        })
        .then((res) => res.data),
  });
};
