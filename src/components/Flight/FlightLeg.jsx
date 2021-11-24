import styles from "./.module.css";

export default function _({
  flight,
}) {
  return (
    <div
      className={`${styles.leg}`}
    >
      <div
        className={`${styles.from}`}
      >
        {flight.depPort}
        {flight.depDate}
      </div>
      <div
        className={`${styles.connect}`}
      >
        TO
      </div>
      <div
        className={`${styles.to}`}
      >
        {flight.arrPort}
        {flight.arrDate}
      </div>
      {flight.fare} {flight.curr}
    </div>
  );
}
