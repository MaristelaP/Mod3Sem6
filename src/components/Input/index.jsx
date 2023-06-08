const Input = (props) =>{

      return(
          <input
          className="meuInput"
          type="text"
          value={props.pet}
          onChange={(event) => props.setPet(event.target.value)}
        />
      )
  }
  
  export default Input