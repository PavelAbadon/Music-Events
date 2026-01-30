import { useState } from "react";

export default function useLocalStorage(key, initialState) {
    const [state, setState] = useState(() => {
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initialState;
    });

    const setPersistedState = (value) => {
        if (value === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
        setState(value);
    };

    return [state, setPersistedState];
}
