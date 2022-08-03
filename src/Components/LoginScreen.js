import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LoginStyle from "../Styled-components/LoginStyle";

export default function LoginScreen() {
  return (
    <LoginStyle>
      <img src={logo} alt="logo trackit" />
      <form>
        <input placeholder="email" type="text" />
        <input placeholder="senha" type="password" />
        <button>Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginStyle>
  );
}
