import { Box } from '@mui/system';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  console.log('GET HEADER');
  return (
    <Box component="header" py={2} textAlign="center">
      Header
    </Box>
  );
}
