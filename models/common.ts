import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactNode } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export type AppPropsWithLayout = AppProps & {
  Layout?: React.ReactElement;
};
