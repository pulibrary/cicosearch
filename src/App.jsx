import { useState } from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import cicoData from "./cico-data.json";

function App() {
    const[items] = useState(cicoData);

    return (
        <section>
        <h1>Items</h1>
        <SearchBar />
        <ResultList items={items} />
    </section>
  )
}

export default App
