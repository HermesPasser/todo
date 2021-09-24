import { useState } from "react"

export default function ListItem({state, setState, label, value, checked = false}) {
    const [done, setCompletion] = useState(checked)

    const handleChecked = (event) => {
        const done_ = event.target.checked
        let items = [...state.listItems]
        const index = items.findIndex(item => item.text === label)
        items[index]['done'] = done_

        setState({...state, listItems: items})
        setCompletion(done_)
    }
    
    return (
        <li className="list-item">
            <input type="checkbox" value={value} checked={done} onChange={handleChecked} />
            <label>{label}</label>
        </li>
    )    
}