import style from './item.module.scss';
import { TarefaDados } from '../../../types/tarefa';

interface ItemProps extends TarefaDados{ //a interface ItewmProps É filha da interface TarefaDados. Dessa forma nós conseguimos herdar todos os tipos de TarefaDados
    selecionaTarefa: (tarefaSelecionada: TarefaDados) => void
}

function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: ItemProps){
    return(
        <li className={`
            ${style.item} 
            ${selecionado ? style.itemSelecionado : ''} 
            ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})} /*aqui está sendo executada uma finção de forma condicional, a função só será disparada se completado for true */    
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>} {/*aqui está sendo renderizado um elemento de forma condicional, a tag <span> só será renderizada de completado for true */}
        </li>
    )
}
export default Item;