import '../styles/globals.scss'
import Head from "next/head"
import { AnimatePresence } from "framer-motion";
import React from 'react';

function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);

  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <title>Kai Pereira | Designer and Developer based in Victoria, BC</title>
        <meta name="description" content="Hi! I'm Kai, a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!" />
        <meta name="keyword" content="FullStack Developer, UI, UX, Design, Developer, FullStack, Backend, Victoria, BC, Blogger, HTML, CSS, JavaScript, Nextjs, React, MongoDB, Mongoose, Express, Node" />
        <meta name="author" content="Kai Pereira" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192x192.png" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Kai Pereira | Designer and Developer based in Victoria, BC" />
        <meta property="og:site_name" content="Kai Pereira" />
        <meta property="og:url" content="https://www.kaipereira.me/" />
        <meta property="og:description" content="Hi! I'm Kai, a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/it's me.png" />
        
        {/* Twitter card tags */}
        <meta name="twitter:title" content="Kai Pereira | Designer and Developer based in Victoria, BC" />
        <meta name="twitter:description" content="Hi! I'm Kai, a passionate fullstack developer and UI/UX Designer based in Victoria, BC! I love solving hard problems and transfering them into beautiful and functional solutions!" />
        <meta name="twitter:url" content="/it's me.png" />
        <meta name="twitter:card" content="summary" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="google-site-verification" content="LUUGlHbdcxo-7-5P56_CoGTj01F4p3NV82x-mXu2CfE" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="google-site-verification" content="7unymZJOcMHrEjiCh1qz8oudMsDd0K40Z_bF3HDHYWM" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Component isFirstMount={isFirstMount} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
