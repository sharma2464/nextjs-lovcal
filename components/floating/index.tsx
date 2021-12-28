import styles from "./floating.module.css"
export default function FloatingButton(props) {
  return (
    <>
      <span className={styles.floating}>{props.children}</span>
    </>
  );
}
