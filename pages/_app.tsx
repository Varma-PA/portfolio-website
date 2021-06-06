import { AppProps } from "next/app";
import "../styles/main.scss";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
