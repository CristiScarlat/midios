import { useContext } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import Provider from "../context/context";
import 'antd/dist/antd.css';
import "../styles/globals.scss"; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
