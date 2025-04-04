import { ChakraProvider } from '@chakra-ui/react';
import "@/styles/globals.css";
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daňové poradenství Dachsová</title>
        <meta name="description" content="Profesionální daňové poradenství pro podnikatele a firmy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="daňové poradenství Liberec, účetnictví Liberec, daňový poradce, účetní služby, mzdová agenda, daňová přiznání, optimalizace daní, firemní účetnictví, daňová evidence, účetnictví pro podnikatele, finanční poradenství, daňová kontrola, DPH, mzdové účetnictví, Liberec daně, Frýdlant daně" />
        <meta name="author" content="Stanislav Tomek" />
        <meta name="robots" content="all"></meta>
        <meta property="og:title" content="Daňové poradenství Dachsová" />
        <meta property="og:description" content="Profesionální daňové poradenství pro podnikatele a firmy." />
        <meta property="og:image" content="/images/logo-da-meta.png" />
        <meta property="og:url" content="https://www.poradenstvi-dachsova.cz" />
        <link rel="icon" href="/images/logo-da-meta.png" type="image/png" />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
