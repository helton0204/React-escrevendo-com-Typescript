import { useState } from 'react';
import {TarefaDados} from '../types/tarefa';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario/index';
import Lista from '../components/lista/index';
import style from './app.module.scss'; //css modules é um pacote que tem a função de tornar as classes css com nomes únicos para não ter problema de sobreposição de estilos. esse pacote, para funcionar, precisa ser instalado

function App() {
  const [tarefas, setTarefas] = useState<TarefaDados[]>([]); //o useState está tipado com uma interface que tem um array em sua implementação pq o componente Formulario exige que o setTarefas passado em sua prop seja o mesmo tipo de array dessa interface declarada
  const [selecionado, setSelecionado] = useState<TarefaDados>(); //<tarefaDados> é responsável por tipar os dados do useState

  function selecionaTarefa(tarefaSelecionada: TarefaDados){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ //tarefasAnteriores se refere a todos os itens do array TarefaDados[]
      ...tarefa, //pega todos os dados do item do array em questão
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false //selecionado se refere a um atributo do item tarefa
    })))
  }

  function finalizarTarefa(){
    if(selecionado){
      //setSelecionado(undefined); //pq????????
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => { 
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}> {/**style é o nome dado para o module css e AppStyle é o nome da classe, dessa forma essa classe pasa a ter um nome único*/}
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
