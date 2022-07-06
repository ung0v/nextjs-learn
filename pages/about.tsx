import { Auth, Header } from '@/components/common';
import { MainLayout } from '@/components/Layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// const Header = dynamic(() => import('@/components/common/Header'), { ssr: false });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  console.log('About query', router.query);

  const [listPost, setListPost] = useState([]);
  const page = router.query?.page;

  useEffect(() => {
    if (!page) return;

    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
      const data = await response.json();

      setListPost(data);
    };
    fetchData();
  }, [page]);

  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <h1>About Page</h1>
      <Header />

      <ul>
        {listPost.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </div>
  );
}

AboutPage.Layout = MainLayout;

export function getStaticProps() {
  console.log('GET STATIC PROPS');

  return { props: {} };
}
