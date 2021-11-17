import styles from './.module.css'

export default function ListOption(props) {
    return (
        <div className={`${styles.entry}`}>
            { props.control }
            { props.label }
        </div>
    )
}