import { Work } from '@/models/work';
import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { WorkItem } from './workItem';
import work1 from '@/assets/images/work_1.png';
import work2 from '@/assets/images/work_2.png';
import work3 from '@/assets/images/work_3.png';
export interface FeatureWorkProps {}

const listWork: Work[] = [
  {
    id: '1',
    imageUrl: work1,
    title: 'Designing Dashboards',
    year: '2020',
    category: 'Dashboard',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: '2',
    imageUrl: work2,
    title: 'Vibrant Portraits of 2020',
    year: '2018',
    category: 'Illustration',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: '3',
    imageUrl: work3,
    title: '36 Days of Malayalam type',
    year: '2018',
    category: 'Typography',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export function FeatureWork(props: FeatureWorkProps) {
  return (
    <Box pt={2} pb={2}>
      <Container>
        <Typography component="h2" variant="h6">
          Featured works
        </Typography>
        <Stack
          direction="column"
          mt={3}
          sx={{
            '& > div:first-child > div': {
              mt: 0,
            },
          }}
        >
          {listWork.map((work) => (
            <WorkItem key={work.id} workData={work} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
