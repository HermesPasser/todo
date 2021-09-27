
export default function ListItem({state, setState, label, value, checked}) {
    const handleChecked = (event) => {
        const done_ = event.target.checked
        let items = [...state.listItems]
        const index = items.findIndex(item => item.text === label)
        items[index]['done'] = done_

        setState({...state, listItems: items})
    }

    const closeClicked = (event) => {
        let itemsCopy = [...state.listItems].filter(item => item.text !== label)
        setState({...state, listItems: itemsCopy})
    }

    return (
        <li className="list-item">
            <input type="checkbox" value={value} checked={checked} onChange={handleChecked} />
            <label>{label}</label>
            <button onClick={closeClicked}>x</button>
        </li>
    )    
}