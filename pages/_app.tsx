import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EmptyLayout } from '@/components/Layout';
import { AppPropsWithLayout } from '@/models';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return <Component {...pageProps} />;
}

export default MyApp;
