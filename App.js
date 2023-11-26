import { AutenticacaoProvider } from "./src/context/AutenticacaoContext";
import { ProdutosProvider } from "./src/context/ProdutosContext";
import { TemaProvider } from "./src/context/TemaContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}