import { Header, Footer } from '@epsilon3-org/shared/ui';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';

import './styles.css';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    });
  });
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />
        {/*  Page content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
};

export default CustomApp;
