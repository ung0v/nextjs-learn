import { Post } from '@/models';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

export interface PostCardProps {
  postData: Post;
}

export function PostCard({ postData: { title, createdAt, tags, content } }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography component="h2" variant="h4" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Stack direction="row" spacing={3} alignItems="flex-start" mb={1}>
          <Typography>{createdAt}</Typography>
          {/* <Box sx={{ borderRight: '1px solid', width: '1px', height: '100%' }}> */}
          <span>|</span>
          {/* </Box> */}
          <Typography>{tags.join(', ')}</Typography>
        </Stack>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
}
