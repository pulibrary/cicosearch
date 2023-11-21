import React from "react";

export default function Item({id, title}) {
    return (
        <div>
            <h3>item</h3>
            {id} {title[0].value}
        </div>
    );
}
