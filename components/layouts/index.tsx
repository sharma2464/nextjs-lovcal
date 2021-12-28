import FloatingButton from '../floating';
import BottomNav from '../nav/bottom';
import styles from "./layout1.module.css"

export default function Layout1(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      {props.children}
        <FloatingButton>
          <button onClick={() => alert("hello!!")}>+</button>
        </FloatingButton>
      <BottomNav />
      </main>
    </div>
  );
}
