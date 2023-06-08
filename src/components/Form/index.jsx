import { useState } from "react";
import Input from "../Input";
import Button from "../Button";


function Form() {
  const [pet, setPet] = useState("");

  return (
    <div>
      <Input input={pet} setPet={setPet}/>
      <Button parametro={pet} setPet={setPet} textButton="Enviar"/>
    </div>
  );
}

export default Form;