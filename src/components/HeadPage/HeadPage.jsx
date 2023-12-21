import React, { useEffect } from 'react';
import Head from 'next/head';

const HeadPage = ({ children }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export const HeadPageMeta = ({ titleMain, descriptionMain, title, description, imageUrl, url }) => {
  return (
    <Head>
      <meta name="description" content={descriptionMain} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <title>{titleMain}</title>
    </Head>
  );
};

export default HeadPage;
