import { Text, View, Switch } from 'react-native';
import { useContext } from 'react';
import { TemaContext } from '../../context/TemaContext';
import { estilos } from './estilos';

export default function Configuracao({ navigation }) {

  const { 
    temaAtual, 
    setTemaAtual, 
    temaEscolhido,
    salvarTemaNoDispositivo } = useContext(TemaContext);

  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
      <Switch
        onValueChange={() => 
          temaAtual === 'escuro' ?
          salvarTemaNoDispositivo('claro') :
          salvarTemaNoDispositivo('escuro')}
        value={temaAtual === 'escuro' ? true : false}
      />
      </View>
    </View>
  );
}

