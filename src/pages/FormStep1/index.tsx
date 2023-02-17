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
      type: FormActions.setCurrentStep,
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
        <p>Step 1/3</p>
        <h1>Let's start with your name.</h1>
        <p>Fill in the field below with your full name.</p>

        <hr />

        <label>
          Your full name
          <input
            type={"text"}
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Next</button>
      </Container>
    </Theme>
  );
};

export default FormStep1;
