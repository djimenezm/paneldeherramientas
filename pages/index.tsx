import Head from 'next/head';
import HomePage from '@/components/HomePage';
import { siteConfig } from '@/lib/site';

const pageTitle = `${siteConfig.name} | ${siteConfig.title}`;

export const config = {
  maxDuration: undefined,
  unstable_runtimeJS: false,
};

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(', ')} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteConfig.url}/`} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:url" content={`${siteConfig.url}/`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={`${siteConfig.url}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}/opengraph-image`} />
        <meta name="theme-color" content={siteConfig.themeColor} />
      </Head>
      <HomePage />
    </>
  );
}
