export default function Select(props){
    return (
        <select
            onChange={()=>dispatch()}
        >
            {props.options.map(option=>(
                <option></option>
            ))}
        </select>
    )
}