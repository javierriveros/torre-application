import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import BaseStyles from "@/styles/BaseStyles";
import { ThemeProvider } from "@/components/Theme";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider initialTheme={"light"}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <GlobalStyles />
        <BaseStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Hydrate>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
