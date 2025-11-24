import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../config/data/request';

export const getCategory = (name) => {
  return useQuery({
    queryKey: ['category', name],
    queryFn: () =>
      request
        .get(`/${name}`, { params: { category: name } })
        .then((res) => res.data),
    enabled: !!name,
  });
};
