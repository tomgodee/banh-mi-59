import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexPage from "@/components/IndexPage";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

import theme, { openSans } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <IndexPage />
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
        <Box mt={8}>
          <Footer />
        </Box>
      </ChakraProvider>

      <Analytics />
    </main>
  );
}
