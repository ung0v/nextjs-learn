import { Post } from '@/models';
import { Box, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import { PostCard } from './postCard';

const listPost: Post[] = [
  {
    id: '1',
    title: 'Making a design system from scratch',
    createdAt: '12 Feb 2020',
    tags: ['Design', 'Pattern'],
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: '2',
    title: 'Creating pixel perfect icons in Figma',
    createdAt: '12 Feb 2020',
    tags: ['Figma', 'Icon Design'],
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export function RecentPost() {
  return (
    <Box component="section" bgcolor="secondary.light" py={3}>
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} mb={3}>
          <Typography variant="h6">Recent posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink
              sx={{
                display: {
                  xs: 'none',
                  md: 'inline',
                },
                color: 'secondary.main',
              }}
            >
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={2.5}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {listPost.map((post) => (
            <Box key={post.id}>
              <PostCard postData={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
