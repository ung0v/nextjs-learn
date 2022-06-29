import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListProps {
  posts: any[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <a>
              <li>{post.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: { posts: data },
  };
};
