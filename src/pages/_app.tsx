import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider } from "@chakra-ui/react";

import theme, { openSans } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <CacheProvider>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          <Head>
            <title>Bánh Mì 59</title>
            <meta
              name="description"
              content="A local store selling vietnamese baguette"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <header>
            <Header />
          </header>
          <Component {...pageProps} />
          <Box mt={8}>
            <Footer />
          </Box>
        </ChakraProvider>
      </CacheProvider>
    </main>
  );
}
