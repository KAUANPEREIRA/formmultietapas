import { BrowserRouter, Route } from "react-router-dom";
import { FormStep1 } from "./pages/FormStep1";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" Component={FormStep1} />
    </BrowserRouter>
  );
};
