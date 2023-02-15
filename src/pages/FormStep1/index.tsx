import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styles";

const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //Em state eu tenho os dados, e em dispatch eu consigo alterar os dados.

  React.useEffect(() => {
    dispatch({
      type: FormActions.setLevel,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Fill in the data");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Passo 1/3 - {state.level}</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome completo
          <input type={"text"} autoFocus value={state.name} onChange={handleNameChange} />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};

export default FormStep1;
