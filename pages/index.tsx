import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../components/card";
import { auth } from "../firebase/config";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  console.log("Loading:", loading, "|", "Current user:", user);

  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* <main className={styles.main}> */}
      {Array(10)
        .fill(
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`
        )
        .map((item, index) => (
          <>
            <Card>{item}</Card>
          </>
        ))}
    </div>
  );
}
