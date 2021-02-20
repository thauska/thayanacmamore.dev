import React from "react";
import Head from "next/head";

export default function Home({ title, description, bg }) {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://thayanacmamore.dev/" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Personal Resume" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
