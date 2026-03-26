import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content={AppConfig.description} />
          <meta
            name="keywords"
            content="affiliate marketing, CPA, CPS, performance marketing, Andorra, digital advertising"
          />
          <meta name="author" content="Quantum Advertising SLU" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={AppConfig.url} />
          <meta property="og:title" content={AppConfig.title} />
          <meta property="og:description" content={AppConfig.description} />
          <meta property="og:image" content="/assets/images/hero-bg.jpg" />
          <meta property="og:site_name" content={AppConfig.site_name} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={AppConfig.title} />
          <meta name="twitter:description" content={AppConfig.description} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
