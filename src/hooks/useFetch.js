import { useState, useEffect } from "react";

function useFetch(url) {
    const [state, setState] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                setState(response.results)
            })
            .catch(err => {
                setError(err)
            })
    })

    return {
        state,
        error
    }

}

export default useFetch;