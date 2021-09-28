import Cross from "../assets/icon-cross.svg"
import { Draggable } from 'react-beautiful-dnd'

export default function ListItem({state, setState, label, value, id, checked}) {
    const class_ = checked ? 'completed-task' : '' 
    
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

    return (
        <Draggable key={id} draggableId={id.toString()} index={value}>
            {(provided) => (
                <li 
                    className="list-item" 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                    >
                    <div>
                        <input type="checkbox" className="checkbox-round" value={value} checked={checked} onChange={handleChecked} />
                        <label className={class_}>{label}</label>
                    </div>
                    <button onClick={closeClicked}>
                        <img src={Cross} alt="x icon" />
                    </button>
                </li>
            )}
        </Draggable>
    )    
}