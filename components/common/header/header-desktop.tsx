import { Box, Stack, Link as MuiLink } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTES_LIST } from './routes';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();

  return (
    <Box display={{ xs: 'none', lg: 'block' }}>
      <Container>
        <Stack direction="row" justifyContent="flex-end" py={2} px={1}>
          {ROUTES_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={route.path === router.pathname ? 'active' : undefined}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
