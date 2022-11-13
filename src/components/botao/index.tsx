import React from 'react';
import style from './botao.module.scss'; //css modules é um pacote que tem a função de tornar as classes css com nomes únicos para não ter problema de sobreposição de estilos. esse pacote, para funcionar, precisa ser instalado

interface BotaoProps{ //uma interface obriga quem extendê-la a declarar todos os atributos e métodos dessa interface
    children: React.ReactNode;
    type?: "button" | "reset" | "submit" | undefined; //? significa que o atributo type não é obrigatório ser declarado
    onClick?: () => void;
}

//Criando uma function component
function Botao(props: BotaoProps){
    return( /*A renderização dos elementos ocorre no return da função render()*/
        <button 
            type={props.type ? props.type : "button"} 
            onClick={props.onClick} /*onClick é a função padrão do react, se esse botão for clicado, será executado a função onCLick da props*/
            className={style.botao} /**style é o nome dado para o module css e botao é o nome da classe, dessa forma essa classe pasa a ter um nome único*/
        >
            {props.children}
        </button>  
    )
}

export default Botao;