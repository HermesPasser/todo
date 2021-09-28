import Cross from "../assets/icon-cross.svg"

export default function ListItem({state, setState, label, value, id, checked}) {
    const handleChecked = (event) => {
        const done_ = event.target.checked
        let items = [...state.listItems]
        const index = items.findIndex(item => item.id === id)
        items[index]['done'] = done_

        setState({...state, listItems: items})
    }

    const closeClicked = (event) => {
        let itemsCopy = [...state.listItems].filter(item => item.id !== id)
        setState({...state, listItems: itemsCopy})
    }
    const class_ = checked ? 'completed-task' : '' 
    return (
        <li className="list-item">
            <div>
                <input type="checkbox" value={value} checked={checked} onChange={handleChecked} />
                <label className={class_}>{label}</label>
            </div>
            <button onClick={closeClicked}>
                <img src={Cross} alt="x icon" />
            </button>
        </li>
    )    
}