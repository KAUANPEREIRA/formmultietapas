import { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./style";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const handleNextStep = () => {
    if (state.email !== "" && state.gitHub !== "") {
      console.log(state);
    } else {
      alert("Preencha todos os campos ");
    }
  };

  //funccao que altera nome no contexto utilzando o hook com reducer

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGitHub,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);
  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>legal {state.name}, onde te achamos </h1>
        <p>Preencha com seus contatos para conseguirmos, entrar em contato.</p>
        <hr></hr>
        <label>
          Qual seu Email?
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub
          <input
            type="text"
            name="github"
            value={state.gitHub}
            onChange={handleGitChange}
          />
        </label>
        <Link to="/step2">Voltar</Link>
        <button style={{ marginLeft: "20px" }} onClick={handleNextStep}>
          Finalizar Cadastro
        </button>
      </C.Container>
    </Theme>
  );
};
