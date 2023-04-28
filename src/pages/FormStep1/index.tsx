import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./style";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha seu nome para prosseguir");
    }
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
      payload: 1,
    });
  }, []);
  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome : </h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr></hr>
        <label>
          Seu nome completo
          <input
            type="text"
            name="name"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
