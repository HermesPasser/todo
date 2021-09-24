
export default function ListItem({label, value, checked = false}) {
    return (
        <li className="list-item">
            <input type="checkbox" value={value} name="radio" checked={checked}  />
            <label>{label}</label>
        </li>
    )    
}