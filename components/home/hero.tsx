import { Box, Button, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import hero from '@/assets/images/hero.png';

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Box>
              <Typography
                component="h1"
                variant="h3"
                sx={{ fontWeight: 'bold', mb: { xs: 3.5, md: 5 } }}
              >
                Hi, I am John, <br />
                Creative Technologist
              </Typography>
              <Typography sx={{ mb: 5 }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </Typography>
            </Box>
            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              borderRadius: '50%',
              color: 'secondary.light',
            }}
          >
            <Image src={hero} alt="hero" layout="responsive" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
