import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function LoginScreen() {
  return (
    <Login>
      <img src={logo} alt="logo trackit" />
      <form>
        <input placeholder="email" type="text" />
        <input placeholder="senha" type="text" />
        <button>Entrar</button>
      </form>
      <Link to="/">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Login>
  );
}
const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70vh;
  p {
    color: #52b6ff;
    text-decoration-line: underline;
    font-size: 14px;
  }
  img {
    width: 50vw;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    input {
      height: 12.5vw;
      margin-bottom: 7px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
    }
    input::placeholder {
      font-size: 21px;
      color: #dbdbdb;
      padding-left: 5px;
    }
    button {
      all: initial;
      height: 12.5vw;
      background-color: #52b6ff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 21px;
      font-family: "Lexend Deca";
      margin-bottom: 25px;
    }
  }
`;
