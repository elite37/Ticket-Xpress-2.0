import Itn from "./Itn";
import s from './.module.css'

export default ({ itns }) => {
  return (
    <div className={`${s.itns}`}>
      {itns.map((itn, i) => (
        <Itn key={i} itn={itn} />
      ))}
    </div>
  );
};
