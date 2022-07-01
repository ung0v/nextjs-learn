import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post: any;
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const data = await response.json();

  const params = data.map((post: any) => ({ params: { postId: String(post.id) } }));

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('GET STATIC PROPS', context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) {
    return {
      notFound: true,
    };
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: { post: data },
    revalidate: 5,
  };
};
