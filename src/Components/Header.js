import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../UserContext";

export default function Header() {
  const { UserData } = useContext(UserContext);
  return (
      <HeaderStyle>
        <span>TrackIt</span>
        <img src={UserData.image} alt="foto de perfil" />
      </HeaderStyle>
  );
}
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  align-items: center;
  padding: 0 20px;
  margin-bottom: 80px;
  box-sizing: border-box;
  position: fixed;
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    font-size: 17px;
  }
  span {
    font-family: "Playball";
    font-size: 40px;
    color: white;
  }
`;
