import { authApi } from '@/service';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export function useAuth(options?: Partial<PublicConfiguration>) {
  const { data, error, mutate } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = data === undefined && error === undefined;

  const login = async () => {
    await authApi.login({
      username: 'easy',
      password: '123qwe',
    });
    await mutate();
  };
  const logout = async () => {
    await authApi.logout();
    await mutate({}, false);
  };

  return {
    data,
    error,
    mutate,
    login,
    logout,
    firstLoading,
  };
}
