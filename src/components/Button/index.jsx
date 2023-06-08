const Button = ({funcao, parametro, setPet, textButton}) =>{
    if(setPet){
        return(
            <button className="btnenviar"
             onClick={() =>{
                funcao(parametro)
                setPet("")
            }}>{textButton}</button>
        )
    }
}

export default Button