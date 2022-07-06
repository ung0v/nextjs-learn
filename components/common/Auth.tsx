import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

export interface AuthProps {
  children: ReactNode;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { data: profile, firstLoading } = useAuth() as any;

  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push('/login');
    }
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <div>Loading...</div>;

  return <div>{children}</div>;
}
