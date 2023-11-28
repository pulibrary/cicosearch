import { useState } from 'react';
import Fuse from "fuse.js";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import cicoData from "./cicoindex.json";

function App() {
    const[items, setItems] = useState(cicoData);

    const options = {
        includeScore: true,
        includeMatches: true,
        threshold: 0.2,
        keys: ["creator",
               "contributor",
               "description",
               "title",
               "language",
               "subject",
               "publisher",
               "source",
               "ciconum",
               "dclnum",
              ],
    };

    const fuse = new Fuse(cicoData, options);

    const handleSearch = (event) => {
        const { value } = event.target;

        // If user searched for empty string,
        // display all data.
        if (value.length === 0) {
            setItems(cicoData.slice(0,50));
            return;
        }

        const results = fuse.search(value);
        const items = results.map((result) => result.item);
        setItems(items)
    }

    return (
        <section>
            <h1>Items</h1>
            <input
                type="text"
                placeholder="Search by author, title, date, publisher, contributor, or language"
                onChange={handleSearch}
            />

            <ul>
                {items.slice(0,50).map((item, index) => (
                    <li key={index}>
                        <div>
                            <h4>{ item.ciconum.join("; ") }</h4>
                            <dl>
                                <dt>dclNumber</dt>
                                <dd>{ item.dclnum.join("; ") } </dd>

                                <dt>creator</dt>
                                <dd>{ item.creator.join("; ") }</dd>
                                
                                <dt>title</dt>
                                <dd>{ item.title.join("; ")}</dd>

                                <dt>issued</dt>
                                <dd>{ item.issued.join("; ") }</dd>

                                <dt>extent</dt>
                                <dd>{ item.extent.join("; ") }</dd>

                                <dt>language</dt>
                                <dd>{ item.language.join("; ") }</dd>

                                <dt>is referenced by</dt>
                                <dd>{ item.isReferencedBy.join("; ") }</dd>

                                <dt>subject</dt>
                                <dd>{ item.subject.join("; ") }</dd>

                                <dt>publisher</dt>
                                <dd>{ item.publisher.join("; ") }</dd>

                                <dt>source</dt>
                                <dd>{ item.source.join("; ") }</dd>

                                <dt>collection</dt>
                                <dd>{ item.isPartOf.join("; ") }</dd>

                                <dt>date</dt>
                                <dd>{ item.date.join("; ") }</dd>

                                <dt>contributor</dt>
                                <dd>{ item.contributor.join("; ") }</dd>

                                <dt>description</dt>
                                <dd>{ item.description.join("; ") }</dd>

                            </dl>
                        </div>
                    </li>
                ))}
            </ul>
       
    </section>
  )
}

export default App
