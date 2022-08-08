import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../Styled-components/GlobalStyle";
import UserContext from "../UserContext";
import Today from "./Today";
import Login from "./Login";
import Register from "./Register";
import History from "./History";
import Habits from "./Habits";

export default function App() {
  const [UserData, setUserData] = useState("");
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("trackit"));
    setUserData(localData);
  },[]);

  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
        <UserContext.Provider value={{ UserData, setUserData }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
          </UserContext.Provider>
        </BrowserRouter>
    </>
  );
}
