import React from "react";
import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import LogRocket from 'logrocket';
LogRocket.init('xzch8a/conceptopia');

export const metadata = {
  title: "Conceptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
     <head>
        <link rel='icon' href='/assets/images/logo.svg' />
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
