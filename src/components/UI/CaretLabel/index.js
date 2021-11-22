import Caret from "../Caret"
import styles from './.module.css'

export default function CaretLabel(props) {
    return (
        <div
            className={`${styles.caret}`}
            onClick={props.onClick}
        >
            <Caret />
            {props.label()}
        </div>
    )
}