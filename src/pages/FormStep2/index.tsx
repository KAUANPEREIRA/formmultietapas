import { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  //funccao que altera nome no contexto utilzando o hook com reducer

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name} Oque melhor descreve você: </h1>
        <p>Escolha a opçaõ que condiz seu status atual profissionalmente</p>
        {/* <hr></hr> */}
        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description="Ja programao há dois anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        {/* <button onClick={handlePrevtStep}>Anterior</button> */}
        <Link to="/">Voltar</Link>

        <button style={{ marginLeft: "20px" }} onClick={handleNextStep}>
          Proximo
        </button>
      </C.Container>
    </Theme>
  );
};
