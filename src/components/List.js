import ListItem from "./ListItem";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function List({state, setState}) {
    const items = [...state.listItems]
    const length = items.length
    let itemsOnDisplay = []

    if (state.activeFilter === 0) {
        itemsOnDisplay = items
    } else if (state.activeFilter === 1) {
        itemsOnDisplay = items.filter(item => !item.done)
    } else {
        itemsOnDisplay = items.filter(item => item.done)
    }
    
    const filterClicked = (id) => setState({...state, activeFilter: id})
    const clearClicked = () => setState({
        ...state, 
        listItems: state.listItems.filter(item => !item.done)        
    })

    const itemDragged = (result) => {
        const [dest, source] = [result.destination, result.source]
        if (!dest) 
            return

        let items = [...state.listItems]; // this ';' is importante since the next command is ambiguous
        [items[source.index], items[dest.index]] = [items[dest.index], items[source.index]]

        setState({ ...state, listItems: items })  
    }

    return (
        <DragDropContext onDragEnd={itemDragged}>
            <Droppable droppableId="list">
                {(provided) => (
    <div className="list" {...provided.droppableProps} ref={provided.innerRef} >
        <ul >
            {
                itemsOnDisplay.map((item, i) => {
                    return <ListItem
                        state={state}
                        setState={setState}
                        
                        label={item.text}
                        checked={item.done}
                        id={item.id}
                        value={i}  /> 
                })
            }
            {provided.placeholder}
        </ul>

        <div className="filter-wrapper">
            <p>{length} items left</p>
            <div className="inner-filter-wrapper">
                <span onClick={() => filterClicked(0)} >All</span>
                <span onClick={() => filterClicked(1)} >Active</span>
                <span onClick={() => filterClicked(2)} >Completed</span>
            </div>
            <span onClick={clearClicked}>Clear Completed</span>
        </div>
        </div>
                    
                    
                    )}
            </Droppable>
        </DragDropContext>
    )    
}