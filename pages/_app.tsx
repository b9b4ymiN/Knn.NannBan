import type { AppProps } from "next/app";
import "../public/assets/css/cookie.css";
import "../public/assets/css/share.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/custom.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
