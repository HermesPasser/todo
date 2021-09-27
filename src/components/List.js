import ListItem from "./ListItem";

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

    return (
        <div className="list">
            <ul>
                {
                    itemsOnDisplay.map((item, i) => {
                        return <ListItem
                            state={state}
                            setState={setState}
                            
                            label={item.text}
                            checked={item.done}
                            value={i}  /> 
                    })
                }
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
    )    
}