import { type AppType } from "next/dist/shared/lib/utils";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Head from "next/head";
import { useEthereum } from "@src/utils/useEthereum";
import { useMetaMask } from "@src/utils/useMetaMask";
const MyApp: AppType = ({ Component, pageProps }) => {
  // MetaMask account management
  useEthereum();
  useMetaMask();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        fontFamily: "Prompt",
        headings: { fontFamily: "Prompt" },
      }}
    >
      <NotificationsProvider position="top-center">
        <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default MyApp;
