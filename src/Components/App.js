import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../Styled-components/GlobalStyle";
import UserContext from "../UserContext";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
//botoes desabilitados no login e register
//biblioteca spinner
//redirecionamento rota /hoje
//layout menu topo

export default function App() {
  const [UserData, setUserData] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ UserData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastro" element={<RegisterScreen />} />
            <Route path="/hoje" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
