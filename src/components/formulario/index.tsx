import React, { useState } from 'react';
import { TarefaDados } from '../../types/tarefa';
import Botao from '../botao/index';
import style from './formulario.module.scss'; //css modules é um pacote que tem a função de tornar as classes css com nomes únicos para não ter problema de sobreposição de estilos. esse pacote, para funcionar, precisa ser instalado
import {v4 as uuidv4} from 'uuid'; //esse pacote importado gera um id aleatório

function Formulario({setTarefas}: {setTarefas: React.Dispatch<React.SetStateAction<TarefaDados[]>>}){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent){ //evento é um parâmetro do tipo React.FormEvent
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {tarefa: tarefa, tempo: tempo, selecionado: false, completado: false, id: uuidv4()}]); //tarefasAntigas é o spread que traz os elementos do array tarefas declarado na função componente App
        setTarefa("");
        setTempo("00:00");
    }

    return( /*A renderização dos elementos ocorre no return da função render()*/ 
        <form className={style.novaTarefa} onSubmit={event => adicionarTarefa(event)}> {/**bind(this) permite que o this seja referenciado dentro da função adicionarTarefa()*/}
            <div className={style.inputContainer}>
                <label htmlFor="tarefa"> {/*htmlFor="tarefa" serve para quando for clicado nele o input seja selecionado*/}
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar?"
                    value={tarefa}
                    required
                    onChange={event => setTarefa(event.target.value)} //... é o spread, ele passa todos os atributos do objeto state    
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo"> {/*htmlFor="tarefa" serve para quando for clicado nele o input seja selecionado*/}
                    Tempo
                </label>
                <input 
                    type="time"
                    step={1} 
                    name="tempo" 
                    id="tempo" 
                    value={tempo}
                    min="00:00:00"  
                    max="01:30:00"
                    required 
                    onChange={event => setTempo(event.target.value)} //... é o spread, ele passa todos os atributos do objeto state 
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form> 
    )
}
export default Formulario;