import Link from "next/dist/client/link";
import Head from "next/head";
import Card from "../../components/card";
import { useAuth } from "../../providers/auth";
import styles from "./settings.module.css";

export default function Settings(props) {
  const { currentUser }: any = useAuth();
  let links = [
    { name: "App Settings", href: "app", props: {} },
    { name: "Terms of Service", href: "tos", props: {} },
    { name: "Privacy Policy", href: "privacy", props: {} },
  ];

  if (currentUser.uid) {
    links.push(
      { name: "Personal", href: "personal", props: {} },
      { name: "Notifications", href: "notifications", props: {} },
      { name: "Logout", href: "logout", props: {} },
      { name: "Delete account", href: "delete", props: {} }
    );
  }
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <section className={styles.settingsList}>
        {links &&
          links.map((setting, index) => (
            <>
              <Card type="list">
                <Link href={"/settings/" + setting.href}>{setting.name}</Link>
              </Card>
            </>
          ))}
      </section>
    </>
  );
}
