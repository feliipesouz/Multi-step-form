import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SelectOption from "../../components/SelectOptions";
import Theme from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import { Container } from "./styles";

const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //Em state eu tenho os dados, e em dispatch eu consigo alterar os dados.

  React.useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setLevel,
        payload: 1,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3");
    } else {
      alert("Fill in the data");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Step 2/3</p>
        <h1>{state.name}, what best describes you?</h1>
        <p>
          Choose the option that best matches your current status,
          professionally.
        </p>

        <hr />

        <SelectOption
          title={"Iniciante"}
          description={"Iniciante"}
          icon={"👦"}
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title={"Experiênte"}
          description={"Codo muito"}
          icon={"👴"}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to={"/"} className={"backButton"}>
          Back
        </Link>
        <button onClick={handleNextStep}>Next</button>
      </Container>
    </Theme>
  );
};

export default FormStep2;
