import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsProps {}

export default function Params(props: ParamsProps) {
  const router = useRouter();
  return (
    <div>
      <>
        Params
        {JSON.stringify(router.query)}
      </>
    </div>
  );
}
