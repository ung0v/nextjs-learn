import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
};
