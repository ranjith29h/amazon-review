import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { ASINForm } from "../components/ASINForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <ASINForm />
      </div>
    </div>
  );
}
