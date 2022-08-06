import styled from "styled-components";

const HabitCards = styled.div`
  width: 100vw;
  box-sizing: border-box;
`;
const TodayStyle = styled.div`
  padding-top: 110px;
  padding-right: 15px;
  background-color: #e5e5e5;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h1 {
    color: #126ba5;
    font-size: 23px;
    margin-bottom: 18px;
    margin-left: 15px;
  }
  p {
    color: #bababa;
    font-size: 18px;
    padding-bottom: 30px;
    margin-left: 15px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;
  margin-bottom: 10px;
  width: 90vw;
  height: 100px;
  background-color: white;
  border-radius: 7px;
  margin-left: 15px;
  box-sizing: border-box;
  padding: 17px 17px;
  position: relative;
  ion-icon{
    font-size: 50px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background-color: ${(props) => props.color};
    color: white;
    padding: 10px;
    border-radius: 8px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  span {
    font-size: 13px;
    margin-bottom: 2px;
  }
`;
export {Card, HabitCards, TodayStyle}