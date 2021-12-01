import s from "./.module.css";
import Leg from "./Leg";

export default ({ itn }) => {
  return (
    <div className={s.itn}>
      <div className={`${s.legs}`}>
        {itn.legs.map((leg, i) => (
          <Leg key={i} leg={leg} />
        ))}
      </div>
      <div className={`${s.info}`}>
        <br />
        <p>
          {itn.fare} {itn.curr}
        </p>
        <p>{itn.exchange}</p>
        <p>{itn.refund}</p>
      </div>
    </div>
  );
};
