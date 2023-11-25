const { createContext, useState } = require("react");


export const GlobalContext = createContext({});

export function InfoProvider( {children} ) {
    const valor = 150;
    const [nome, setNome] = useState('Cesar');

    return (
        <GlobalContext.Provider value={{
            valor,
            nome,
            setNome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}