import { AuthProvider } from '@/context/AuthContext';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Auth System</title>
      </Head>
      <AuthProvider>

      <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;