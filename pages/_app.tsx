import { AppProps } from "next/app";
import "../styles/index.css";
import { useEffect } from "react";
import { analytics } from "../config/firebaseConfig";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    analytics;
  }, []);
  return <Component {...pageProps} />;
}
