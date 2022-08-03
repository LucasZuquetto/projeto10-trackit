import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../Styled-components/GlobalStyle";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
