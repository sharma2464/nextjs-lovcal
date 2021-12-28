import Link from "next/dist/client/link";
import { useState } from "react";
import styles from "./bottom.module.css";

export default function BottomNav(props) {
  const [currentTab, setCurrentTab] = useState("/home");

  const handleOntabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <>
      <div className={styles.navbar}>
        {[
          { href: "/", label: "Home" },
          { href: "/search", label: "Search" },
          { href: "/new", label: "New" },
          { href: "/chat", label: "Chat" },
          { href: "/settings", label: "Settings" },
        ].map((tab, index) => (
          <>
            <Link
              key={index}
              href={tab.href}
              // className={currentTab === tab.href ? styles.active : ''}
              // onClick={() => handleOntabClick(tab.href)}
            >
              {tab.label}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
