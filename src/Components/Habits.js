import styled from "styled-components";
import {
  AddHabits,
  ButtonInputHabit,
  DaySelect,
  HabitsStyle,
  InputHabit,
} from "../Styled-components/HabitsStyle";
import Footer from "./Footer";
import Header from "./Header";

export default function Habits() {
  return (
    <>
      <Header />
      <HabitsStyle>
        <AddHabits>
          <h1>Meus hábitos</h1>
          <div>+</div>
        </AddHabits>
        <InputHabit>
          <input placeholder="nome do hábito" type="text" />
          <div>
            <DaySelect>D</DaySelect>
            <DaySelect>S</DaySelect>
            <DaySelect>T</DaySelect>
            <DaySelect>Q</DaySelect>
            <DaySelect>Q</DaySelect>
            <DaySelect>S</DaySelect>
            <DaySelect>S</DaySelect>
          </div>
          <div>
            <ButtonInputHabit color="#52B6FF" backgroundcolor="#FFFFFF">
              Cancelar
            </ButtonInputHabit>
            <ButtonInputHabit color="#FFFFFF" backgroundcolor="#52B6FF">
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
