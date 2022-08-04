import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/historico">
        <span>Histórico</span>
      </Link>
      <HojeFooter to="/hoje">Hoje</HojeFooter>
    </FooterStyle>
  );
}
const FooterStyle = styled.div`
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  height: 75px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 36px;
  color: #52b6ff;
  font-size: 18px;
  align-items: center;
  background-color: white;
  span{
    color:#52b6ff;
  }
`;

const HojeFooter = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 91px;
  background-color: #52b6ff;
  border-radius: 50%;
  bottom: 16px;
  left: 38vw;
  color: white;
`;
