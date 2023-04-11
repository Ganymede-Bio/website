import React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <Script
            id="intercom"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.intercomSettings = {
                  app_id: "your_intercom_app_id",
                };
                (function () {
                  var w = window;
                  var ic = w.Intercom;
                  if (typeof ic === "function") {
                    ic("reattach_activator");
                    ic("update", w.intercomSettings);
                  } else {
                    var d = document;
                    var i = function () {
                      i.c(arguments);
                    };
                    i.q = [];
                    i.c = function (args) {
                      i.q.push(args);
                    };
                    w.Intercom = i;
                    var l = function () {
                      var s = d.createElement("script");
                      s.type = "text/javascript";
                      s.async = true;
                      s.src = "https://widget.intercom.io/widget/${process.env.INTERCOM_APP_ID}";
                      var x = d.getElementsByTagName("script")[0];
                      x.parentNode.insertBefore(s, x);
                    };
                    if (w.attachEvent) {
                      w.attachEvent("onload", l);
                    } else {
                      w.addEventListener("load", l, false);
                    }
                  }
                })();
              `,
            }}
          /> */}
          <Script
            id="google-analytics-script"
            strategy="lazyOnload"
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
