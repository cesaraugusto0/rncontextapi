import { escuro, claro } from "../estilosGlobais";

const { createContext, useState } = require("react");

export const TemaContext = createContext({});

export function TemaProvider( {children} ) {
    const [temaAtual, setTemaAtual] = useState('escuro');

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual
        }}>
            {children}
        </TemaContext.Provider>
    )
}