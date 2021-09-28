import { Fragment } from "react";

export default function FIlterOptions({state, setState}) {
    const selected = state.activeFilter
    const filterClicked = (id) => setState({...state, activeFilter: id})
   
    return (
        <Fragment>
            <span 
                onClick={() => filterClicked(0)} 
                className={selected === 0 ? 'selectedClass' : ''}
                >

                All</span>
            <span 
                onClick={() => filterClicked(1)}
                className={selected === 1 ? 'selectedClass' : ''}
                >
                Active</span>
            <span 
                onClick={() => filterClicked(2)}
                className={selected === 2 ? 'selectedClass' : ''}
                >
                Completed</span>
        </Fragment>
    )    
}