import styled from "styled-components";

const HabitsStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 120px;
  background-color: #e5e5e5;
  height: 81vh;
  p {
    color: #666666;
    font-size: 18px;
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
const InputHabit = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 88vw;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
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
const ButtonInputHabit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  width: 40px;
  margin-left: 40px;
  border-radius: 5px;
`;
const DaySelect = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  color: #dbdbdb;
  font-size: 20px;
  margin-right: 4px;
`;

export { DaySelect, ButtonInputHabit, InputHabit, AddHabits, HabitsStyle };
