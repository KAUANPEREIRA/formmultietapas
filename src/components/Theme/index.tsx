import { ReactNode } from "react";
import { useForm } from "../../contexts/FormContext";
import { Header } from "../Header";
import { SideBarItem } from "../SidebarItem";
import * as C from "./style";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.SideBar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
