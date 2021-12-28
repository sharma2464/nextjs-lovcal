import Link from "next/dist/client/link";
import Head from "next/head";
import Card from "../../components/card";
import styles from "./new.module.css";

export default function New(props) {
  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <div className={styles.imageContainer}>
        <Card>
          <button>+</button>
        </Card>
        <Link href={"/auth"}>Login</Link>
      </div>
    </>
  );
}
