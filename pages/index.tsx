import { Seo } from '@/components/common';
import { FeatureWork, HeroSection, RecentPost } from '@/components/home';
import { MainLayout } from '@/components/Layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <Seo
        seoData={{
          title: 'NextJS Tutorials | Vuong',
          desc: 'A website for learning nextjs',
          url: 'https://nextjt-learn.vercel.app/',
          thumbnailUrl:
            'https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',
        }}
      />
      <HeroSection />
      <RecentPost />
      <FeatureWork />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
