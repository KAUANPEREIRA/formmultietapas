import { ReactNode, createContext, useContext, useReducer } from "react";
type State = {
  currentStep: number;
  name: string;
  level: number;
  email: string;
  gitHub: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type FormProviderProps = {
  children: ReactNode;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};
const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  gitHub: "",
};
//criando context
const FormContext = createContext<ContextType | undefined>(undefined);

//reducer

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
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
    case FormActions.setGitHub:
      return { ...state, gitHub: action.payload };
    default:
      return state;
  }
};

//Provider

export const FormProvider = ({ children }: FormProviderProps) => {
  //passar reducer , o estado inicial
  //uso padrao reducer pelo react
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

//context Hook para utilizar e ter dados do contexto

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm prescisa ser utilizado dentro do FormProvider");
  }
  return context;
};
