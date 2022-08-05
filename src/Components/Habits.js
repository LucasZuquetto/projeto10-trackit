import { useContext, useState } from "react";
import styled from "styled-components";
import { sendHabitInfo } from "../services/requests";
import {
  AddHabits,
  ButtonInputHabit,
  DaySelect,
  HabitsStyle,
  InputHabit,
} from "../Styled-components/HabitsStyle";
import UserContext from "../UserContext";
import Footer from "./Footer";
import Header from "./Header";

//se tiver mais de 1 habito criado, os habitos são listados, e a mensagem desaparece
//
export default function Habits() {
  const { UserData } = useContext(UserContext);

  const [isCreatingHabit, setIsCreatingHabit] = useState(false)
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);

  function createHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${UserData.token}`,
      },
    };
    const promise = sendHabitInfo({ name: name, days: days }, config);
    promise.then((response) => console.log(response));
  }

  function selectDays(dayNumber) {
    if (days.includes(dayNumber)) {
      let index = days.indexOf(dayNumber);
      days.splice(index, 1);
      setDays([...days]);
    } else {
      setDays([...days, dayNumber]);
    }
  }

  return (
    <>
      <Header />
      <HabitsStyle>
        <AddHabits>
          <h1>Meus hábitos</h1>
          <div onClick={() => setIsCreatingHabit(true) }>+</div>
        </AddHabits>
        <InputHabit display={isCreatingHabit ? 'flex' : 'none'}>
          <input
            placeholder="nome do hábito"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <DaySelect
              onClick={() => selectDays(0)}
              fontcolor={days.includes(0) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
            >
              D
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(1)}
              fontcolor={days.includes(1) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
            >
              S
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(2)}
              fontcolor={days.includes(2) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
            >
              T
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(3)}
              fontcolor={days.includes(3) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
            >
              Q
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(4)}
              fontcolor={days.includes(4) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
            >
              Q
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(5)}
              fontcolor={days.includes(5) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
            >
              S
            </DaySelect>
            <DaySelect
              onClick={() => selectDays(6)}
              fontcolor={days.includes(6) ? "#FFFFFF" : "#dbdbdb"}
              backcolor={days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
            >
              S
            </DaySelect>
          </div>
          <div>
            <ButtonInputHabit onClick={() => setIsCreatingHabit(false) } color="#52B6FF" backgroundcolor="#FFFFFF">
              Cancelar
            </ButtonInputHabit>
            <ButtonInputHabit
              onClick={createHabit}
              color="#FFFFFF"
              backgroundcolor="#52B6FF"
            >
              Salvar
            </ButtonInputHabit>
          </div>
        </InputHabit>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HabitsStyle>
      <Footer />
    </>
  );
}