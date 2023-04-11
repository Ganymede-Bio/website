import React from 'react'
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import * as ga from "../lib/ga";
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import { googleTag } from '../utils/constants/constants';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({
      gtmId: googleTag
    })
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
    <div>
      <Script id="LeadLander">
        {`
        var llcookieless = false;
        var formalyze = [];
        formalyze.auto = true;
        formalyze.callback = function(options) {};
        (function() {
          var a = document.createElement('script');
          a.src = 'https://lltrck.com/scripts/lt-v3.js?llid=35228';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(a, s);
        })();
      `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
