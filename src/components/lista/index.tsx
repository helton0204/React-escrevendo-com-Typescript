import {TarefaDados} from '../../types/tarefa'
import Item from './item';
import style from './lista.module.scss'; //css modules é um pacote que tem a função de tornar as classes css com nomes únicos para não ter problema de sobreposição de estilos. esse pacote, para funcionar, precisa ser instalado

interface ListaProps{
    tarefas: TarefaDados[],
    selecionaTarefa: (tarefaSelecionada: TarefaDados) => void
}

//utilizando uma function component
function Lista(props: ListaProps){ //listaProps é uma interface importada do caminho '../../types/tarefa'
    return(
        <aside className={style.listaTarefas}> {/**style é o nome dado para o module css e listaTarefas é o nome da classe, dessa forma essa classe pasa a ter um nome único*/}
            <h2>Estudos do dia</h2>
            <ul>
                {props.tarefas.map(tarefa => ( 
                    <Item 
                        selecionaTarefa={props.selecionaTarefa}
                        key={tarefa.id} /*Sempre que for feita uma renderização dinâmica de múltiplas linhas, cada uma dessas linhas deve ser identificada com uma key*/
                        tarefa={tarefa.tarefa} 
                        tempo={tarefa.tempo} 
                        selecionado={tarefa.selecionado} 
                        completado={tarefa.completado} 
                        id={tarefa.id}/> 
                ))}
            </ul>
        </aside>
    )
}
export default Lista;