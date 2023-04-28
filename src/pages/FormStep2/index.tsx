import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./style";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Preencha seu nome para prosseguir");
    }
  };

  const handlePrevtStep = () => {
    navigate("/");
  };

  //funccao que altera nome no contexto utilzando o hook com reducer

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);
  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome : </h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr></hr>
        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
        />
        <SelectOption
          title="Sou programador"
          description="Ja programao há dois anos ou mais"
          icon="😎"
        />
        <button onClick={handlePrevtStep}>Anterior</button>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
