import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styles";

const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //Em state eu tenho os dados, e em dispatch eu consigo alterar os dados.

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Fill in the data");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGithub, payload: e.target.value });
  };

  return (
    <Theme>
      <Container>
        <p>Step 3/3 - {state.level}</p>
        <h1>Nice {state.name}, where do we find you?</h1>
        <p>Fill in your contacts so we can communicate soon.</p>

        <hr />

        <label>
          What is your email?
          <input
            type={"email"}
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          What is your GitHub?
          <input
            type={"url"}
            autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to={"/step2"} className={"backButton"}>
          Back
        </Link>
        <button onClick={handleNextStep}>Finalize registration</button>
      </Container>
    </Theme>
  );
};

export default FormStep3;
