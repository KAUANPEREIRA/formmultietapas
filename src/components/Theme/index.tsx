import { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./style";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.SideBar></C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
