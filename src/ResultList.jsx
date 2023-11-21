import React from "react";
import Item from "./Item";

export default function ResultList({ items = [] }) {
    if (!items.length) return <div>No Items Listed.</div>
    return (
        <div>
            <h2>items</h2>
            {
                items.map(item => <Item id={item.contributor[0].label} {...item} />)
            }
        </div>
    );
}
