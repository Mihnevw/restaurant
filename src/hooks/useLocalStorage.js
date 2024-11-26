import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => { //state-a ще е равен на отговора от тази функция 4-ред а тази функция ще се изпълни само когато се реферешне приложението
        try {
            let item = localStorage.getItem(key)

            return item
                ? JSON.parse(item)
                : initialValue
        } catch (err) {
            console.log(err)
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            //save to localStorage
            localStorage.setItem(key, JSON.stringify(value)) //Обръщаме value в стринг

            setState(value)

        } catch (err) {
            console.log(err)
        }
    }

    return [
        state,
        setItem
    ]
}

export default useLocalStorage;