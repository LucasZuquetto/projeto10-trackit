import Footer from "./Footer";
import Header from "./Header";
import DayJS from "react-dayjs";
import dayjs from "dayjs";
import { Card, HabitCards, TodayStyle } from "../Styled-components/TodayStyle";

export default function Today() {
  const dayjs = require("dayjs");

  function weekdayTranslate() {
    const weekday = dayjs().format("dddd");
    switch (weekday) {
      case "Monday":
        return "Segunda-feira";
      case "Tuesday":
        return "Terça-feira";
      case "Wednesday":
        return "Quarta-feira";
      case "Thursday":
        return "Quinta-feira";
      case "Friday":
        return "Sexta-feira";
      case "Saturday":
        return "Sábado";
      case "Sunday":
        return "Domingo";
    }
  }

  function HabitCard() {
    return (
      <Card>
        <h2>Ler 1 capítulo de livro</h2>
        <span>Sequência atual: 3 dias</span>
        <span>Seu recorde: 5 dias</span>
        <ion-icon name="checkmark-sharp"></ion-icon>
      </Card>
    );
  }

  return (
    <>
      <Header />
      <TodayStyle>
        <div>
          <h1>
            {weekdayTranslate()}
            {dayjs().format(", DD/MM")}
          </h1>
          <p>Nenhum hábito concluído ainda</p>
        </div>
        <HabitCards>
          <HabitCard />
          <HabitCard />
          <HabitCard />
        </HabitCards>
      </TodayStyle>
      <Footer />
    </>
  );
}
