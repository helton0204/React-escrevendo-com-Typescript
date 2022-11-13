import style from "./relogio.module.scss";

interface RelógioProps{
    tempo: number | undefined;
}

function Relogio({tempo = 0} : RelógioProps){ //tempo = 0 significa que se  a prop tempo, passada para função componente Relogio, for undefined, tempo recebe o valor 0 
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0").split("");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0").split("");

    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}
export default Relogio