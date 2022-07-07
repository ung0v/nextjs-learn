import { Work } from '@/models/work';
import { Badge, Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export interface WorkItemProps {
  workData: Work;
}

export function WorkItem({
  workData: { imageUrl, title, year, category, content },
}: WorkItemProps) {
  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mt={3} mb={2}>
        <Box flexBasis={'25%'}>
          <Image src={imageUrl} alt={title} layout="responsive" />
        </Box>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography component="h3" variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Box
              sx={{
                bgcolor: '#142850',
                height: '25px',
                color: 'white',
                borderRadius: '16px',
                px: 1,
                fontWeight: 'bold',
              }}
            >
              {year}
            </Box>
            <Typography color="#8695A4">{category}</Typography>
          </Stack>
          <Typography>{content}</Typography>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}
