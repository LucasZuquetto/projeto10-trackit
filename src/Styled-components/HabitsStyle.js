import styled from "styled-components";

const HabitsStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 120px;
  background-color: #e5e5e5;
  height: 85vh;
  p {
    color: #666666;
    font-size: 18px;
  }
`;
const InputHabit = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  margin-bottom: 30px;
  width: 88vw;
  height: 190px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  input {
    border: 1px solid #d5d5d5;
    height: 45px;
    width: 90%;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 21px;
    
  }
  input:focus {
    outline: none;
    border: 1px solid black;
  }
  input::placeholder {
    padding-left: 7px;
    color: #dbdbdb;
    font-size: 20px;
  }
  div {
    display: flex;
    height: 35px;
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;
const AddHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  h1 {
    font-size: 23px;
    color: #126ba5;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #52b6ff;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    box-sizing: border-box;
    padding: 5px;
    font-size: 27px;
  }
`;

const ButtonInputHabit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  width: 40px;
  margin-left: 40px;
  border-radius: 5px;
  margin-top: 20px;
`;
const DaySelect = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: ${(props) => props.fontcolor};
  font-size: 20px;
  margin-right: 4px;
  background-color: ${(props) => props.backcolor};
  margin-top: 10px;
`;

const MyHabits = styled.div`
  background-color: white;
  width: 88vw;
  height: 91px;
  margin-bottom: 75px;
  padding: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  ion-icon {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 18px;
  }
  h1 {
    color: #666666;
    font-size: 20px;
    margin-bottom: 15px;
  }
  div {
    display: flex;
  }
  div div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export { ButtonInputHabit, AddHabits, HabitsStyle, InputHabit, DaySelect, MyHabits };
