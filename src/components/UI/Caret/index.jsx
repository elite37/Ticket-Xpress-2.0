import { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import styles from "./.module.css";

export default function Caret({ onClick }) {
  let ref = useRef(null);
  const [up, setUp] = useState(false);

  useEffect(() => {
    let iconWidth = ref.current.childNodes[0].height.animVal.value;
    let refWidth = `${iconWidth}px`
    ref.current.style.height = refWidth;
    ref.current.style.width = refWidth;
  }, [])

  const rotate = () => {
    let d = up ? 0 : 180;
    ref.current.style.transform = `rotate(${d}deg)`;
    setUp((prev) => !prev);
  };

  return (
    <div
      className={`${styles.caret}`}
      ref={ref}
    >
      <AiFillCaretDown
        onClick={() => {
          if (onClick) onClick();
          rotate();
        }}
      />
    </div>
  );
}
