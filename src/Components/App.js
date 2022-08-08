import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../Styled-components/GlobalStyle";
import UserContext from "../UserContext";
import Today from "./Today";
import Login from "./Login";
import Register from "./Register";
import History from "./History";
import Habits from "./Habits";

//progressbar
//quando reinicia a pagina, os dados são perdidos pq tem q passar pelo login
//fazer um hook igual aos prints, armazenar no localStorage o token, se ele n existir, vai pra tela de login
//filter e pointer nos botoes
export default function App() {
  const [UserData, setUserData] = useState("");
  

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ UserData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
