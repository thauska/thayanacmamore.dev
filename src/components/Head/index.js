import React from 'react';
import Head from 'next/head';

export default function Home({ title, description, bg }) {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="aluraquiz" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpg" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
    </Head>
  );
}