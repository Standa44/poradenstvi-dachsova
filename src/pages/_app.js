import { ChakraProvider } from '@chakra-ui/react';
import "@/styles/globals.css";
import Layout from '@/components/LayoutComponents/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Daňové poradenství Dachsová</title>
        <meta name="description" content="Daňové poradenství Dachsová" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
