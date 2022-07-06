import { useAuth } from '@/hooks';
import { authApi } from '@/service';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter();
  const { data, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const handleLogin = async () => {
    try {
      await login();
      router.push('/about');
    } catch (error) {
      console.log('failed to login', error);
    }
  };
  const handleGetProfile = async () => {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('failed to logout', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <h3>Profile: {JSON.stringify(data || {}, null, 4)}</h3>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
