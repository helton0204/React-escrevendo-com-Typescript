import Botao from "../botao";
import Relogio from "./relogio";
import style from "./cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/time";
import { TarefaDados } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface CronometroProps{
    selecionado: TarefaDados | undefined;
    finalizarTarefa: () => void;
}

function Cronometro(props: CronometroProps){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(props.selecionado?.tempo){
            setTempo(tempoParaSegundos(props.selecionado.tempo));
        }
    }, [props.selecionado]) //sempre que selecionado mudar a função vai ser disparada. É assim que funciona o useEffect

    function regressiva(contador: number = 0){ //se não for passado nenhum valor para o parametyro contador, o valor desse parâmetro é assumido como 0
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            props.finalizarTarefa();
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>Iniciar</Botao>
        </div>
    )
}
export default Cronometro;