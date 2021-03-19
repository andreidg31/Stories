import React, {useState} from 'react';

const initialState = null;

export const Context = React.createContext();

const StoreProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default StoreProvider;