import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { loginUser } from "../services/requests";
import LoginStyle from "../Styled-components/LoginStyle";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  function handleForm(e) {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
    console.log(formLogin);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const promise = loginUser(formLogin);
    console.log(promise);
    promise.then((e) => {
      console.log(e); //aqui está o data
      navigate("/");
    });
    promise.catch(() => {
      alert("houve um erro no seu login");
    });
  }
  return (
    <LoginStyle>
      <img src={logo} alt="logo trackit" />
      <form onSubmit={handleSubmit}>
        <input
          value={formLogin.email}
          onChange={handleForm}
          placeholder="email"
          name="email"
          type="text"
        />
        <input
          value={formLogin.password}
          onChange={handleForm}
          name="password"
          placeholder="senha"
          type="password"
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginStyle>
  );
}
