import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: number;
  email: string;
  github: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => any;
};

type FromProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0 | 1,
  email: "",
  github: "",
};

const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};


//Meu Provider, que é um component.
export const FormProvider = ({ children }: FromProviderProps) => {
  //Em state eu tenho os meus dados, e em dispatch eu tenho uma função que eu uso para executar as minhas ações.
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

//Meu hook que eu criei para acessar o meu contexto.
export const useForm = () => {
  //Lembrando que para criar um hook, sempre começamos com a palavra "use".
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("Essa página não pertence ao nosso Provider");
  }
  return context;
};
