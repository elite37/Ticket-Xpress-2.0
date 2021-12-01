import s from "./.module.css";
import Section from './Section'
import {
  AiFillCaretRight
} from 'react-icons/ai'

export default ({ leg }) => {
  return (
    <div className={`${s.leg}`}>
      <Section airport={leg.depPort} date={leg.depDate} />
      <div className={`${s.connect}`}><AiFillCaretRight /> </div>
      <Section airport={leg.arrPort} date={leg.arrDate} />
    </div>
  );
};
