import { FeatureWork, HeroSection, RecentPost } from '@/components/home';
import { MainLayout } from '@/components/Layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <HeroSection />
      <RecentPost />
      <FeatureWork />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
