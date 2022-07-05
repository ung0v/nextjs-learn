import { authApi } from '@/service';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const handleLogin = async () => {
    try {
      await authApi.login({
        username: 'easy',
        password: '123qwe',
      });
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
      await authApi.logout();
    } catch (error) {
      console.log('failed to logout', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
