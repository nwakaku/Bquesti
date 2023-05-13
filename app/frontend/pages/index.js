import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bquesti</title>
        <meta name="description" content="Bquesti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
