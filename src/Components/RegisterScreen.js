import LoginStyle from "../Styled-components/LoginStyle";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  return (
    <LoginStyle>
      <img src={logo} alt="logo trackit" />
      <form>
        <input placeholder="email" type="text" />
        <input placeholder="senha" type="password" />
        <input placeholder="nome" type="text" />
        <input placeholder="foto" type="text" />
        <button>Registrar</button>
      </form>
      <Link to="/">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginStyle>
  );
}
