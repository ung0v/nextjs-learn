import Header from 'next/head';

export interface SeoProps {
  seoData: {
    title: string;
    desc: string;
    url: string;
    thumbnailUrl: string;
  };
}

export function Seo({ seoData: { title, desc, url, thumbnailUrl } }: SeoProps) {
  return (
    <Header>
      <title>NextJS Tutorials | Vuong</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={thumbnailUrl}></meta>
    </Header>
  );
}
