import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

function CharacterList() {
    const [count] = useContext(AuthContext)
    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const [character] = useFetch(url);

    return (
        <>
            <h2>Count - {count}</h2>

            <ul>
                {character.map(x => <li key={x.name}>{x.name}</li>)}
            </ul>

            <button onClick={() => setUrl('https://swapi.dev/api/planets')}>Planets</button>
        </>
    )
}

export default CharacterList;
