import styles from './card.module.css';
export default function Card(props) {
  return props.type === 'list' ? (
    <>
      <div className={styles.listCard}>{props.children}</div>
    </>
  ) : (
    <>
      <div className={styles.card}>{props.children}</div>
    </>
  );
}
