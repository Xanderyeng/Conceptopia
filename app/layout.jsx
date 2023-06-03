import React from "react";
import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import Script from "next/script";

export const metadata = {
  title: "Conceptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/images/logo.svg' />
        <Script
          src='https://cdn.lr-ingest.com/LogRocket.min.js'
          crossorigin='anonymous'
        ></Script>
        <Script>
          window.LogRocket && window.LogRocket.init('xzch8a/conceptopia');
        </Script>
      </head>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
