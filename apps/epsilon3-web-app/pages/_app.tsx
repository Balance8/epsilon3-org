import { Header, Footer } from '@epsilon3-org/shared/ui';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import './styles.css';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
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
