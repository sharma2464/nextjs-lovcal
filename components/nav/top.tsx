import styles from './top.module.css';
import { useState } from 'react';

export default function TopNav(props) {
  const [currentTab, setCurrentTab] = useState('/home');

  const handleOntabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <>
      <div className={styles.navbar}>
      {/* <div style={{display: "flex", position: "fixed", bottom: 0, width: "360px", justifyContent: "space-between"}} > */}
        {[
          { href: '/home', label: 'Home' },
          { href: '/search', label: 'Search' },
          { href: '/new', label: 'New' },
          { href: '/chat', label: 'Chat' },
          { href: '/settings', label: 'Settings' },
        ].map((tab, index) => (
          <>
            <a
              href={"#"+tab.href}
              className={currentTab === tab.href ? styles.active : ''}
              onClick={() => handleOntabClick(tab.href)}
            >
              {tab.label}
            </a>
          </>
        ))}
      </div>
    </>
  );
}
