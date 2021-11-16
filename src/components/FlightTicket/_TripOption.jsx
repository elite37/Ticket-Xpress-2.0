import {
    AiFillCaretDown
} from 'react-icons/ai'

export default function TripOption(props){
    return (
        <div>
            <select>
                Round Trip
            </select>
            <AiFillCaretDown />
            {props.options.map(option=>{
                return (
                    <option value={option.value}>{option.value}</option>
                )
            })}
        </div>
    )
}