import React, { useState } from "react";


export default function SearchBar({ onSearchTerm = f => f  }) {
    const [term, setTerm] = useState("");

    const submit = e => {
        e.preventDefault();
        onSearchTerm(term)
 };

    return (
        <form onSubmit={submit}>
            <input
                value={term}
                onChange={event => setTerm(event.target.value)}
                type="text"
                placeholder="search terms..."
                required
            />
            <button>SEARCH</button>
        </form>
);
}
