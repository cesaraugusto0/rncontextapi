import { TemaProvider } from "./src/context/TemaContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}