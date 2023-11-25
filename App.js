import { InfoProvider } from "./src/context/GlobalContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>
  );
}