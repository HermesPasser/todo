import { Fragment } from "react/cjs/react.production.min";
import ListItem from "./ListItem";

export default function List() {
    return (
        <div className="list">
            <ListItem label="Placeholder" value="1"  />
            <ListItem label="Placeholder" value="2" checked={true} />
            <div className="filter-wrapper">
                <a href="#">0 items left</a>
                <div className="inner-filter-wrapper">
                    <a href="#">All</a>
                    <a href="#">Active</a>
                    <a href="#">Completed</a>
                </div>
                <a href="#">Clear Completed</a>
            </div>
        </div>
    )    
}