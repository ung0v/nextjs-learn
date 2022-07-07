import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icon';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box pt={7} pb={3} textAlign="center">
      <Stack direction="row" justifyContent="center" spacing={5} mb={3}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </Stack>
      <Typography component="h4" variant="subtitle1">
        Copyright ©2020 All rights reserved{' '}
      </Typography>
    </Box>
  );
}
