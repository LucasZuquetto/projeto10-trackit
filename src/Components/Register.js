import LoginStyle from "../Styled-components/LoginStyle";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/requests";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const promise = registerUser(form);
    promise.then(() => {
      navigate("/");
    });
    promise.catch(() => {
      alert("houve um erro no seu cadastro");
    });
  }

  return (
    <LoginStyle>
      <img src={logo} alt="logo trackit" />
      <form onSubmit={handleSubmit}>
        <input
          value={form.email}
          onChange={handleForm}
          placeholder="email"
          name="email"
          type="text"
        />
        <input
          value={form.password}
          onChange={handleForm}
          placeholder="senha"
          name="password"
          type="password"
        />
        <input
          value={form.name}
          onChange={handleForm}
          placeholder="nome"
          name="name"
          type="text"
        />
        <input
          value={form.image}
          onChange={handleForm}
          placeholder="foto"
          name="image"
          type="text"
        />
        <button type="submit">Registrar</button>
      </form>
      <Link to="/">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginStyle>
  );
}
