import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Head from "next/head";

import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    // when component mounted, subscribe to router and log page views
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Ganymede</title>
        <link rel="shortcut icon" href="/logo/favicon.png" type="image/x-icon"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
