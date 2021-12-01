import s from './.module.css'

export default ({airport, date, city}) => {
return (
    <div className={`${s.section}`}>
        <p className={`${s.airport}`}>{airport}</p>
        <p>{date}</p>
    </div>
)
}