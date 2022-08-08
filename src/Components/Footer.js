import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useEffect } from "react";
import UserContext from "../UserContext";
export default function Footer() {
  
  
  const { UserData,setUserData } = useContext(UserContext)
  useEffect(() =>{
    const localData = JSON.parse(localStorage.getItem("trackit"));
    setUserData(localData);
  },[])
  let HabitsDonePercentage = (UserData.completed/UserData.total)*100
  return (
    <FooterStyle>
      <Link to="/habitos">
        <span>Hábitos</span>
      </Link>
      <Link to="/historico">
        <span>Histórico</span>
      </Link>
      <HojeFooter to="/hoje">
        <CircularProgressbar
          value={HabitsDonePercentage}
          text="Hoje"
          styles={buildStyles({
            textSize: "22px",
            pathColor: `#FFFFFF`,
            textColor: "#FFFFFF",
            trailColor: "#52B6FF",
          })}
        />
      </HojeFooter>
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
  margin-top: 75px;
  span {
    color: #52b6ff;
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
  padding: 5px;
  box-sizing: border-box;
`;
