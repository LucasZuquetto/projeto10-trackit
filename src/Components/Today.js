import Footer from "./Footer";
import Header from "./Header";
import DayJS from "react-dayjs";
import dayjs from "dayjs";
import { Card, HabitCards, TodayStyle } from "../Styled-components/TodayStyle";
import {
  getTodayHabits,
  RequestHabitDone,
  RequestHabitUncheck,
} from "../services/requests";
import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";

export default function Today() {
  const dayjs = require("dayjs");
  const { UserData } = useContext(UserContext);
  const [TodayHabits, setTodayHabits] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${UserData.token}`,
    },
  };

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
  useEffect(() => {
    renderTodayHabits();
  }, []);

  function renderTodayHabits() {
    const promise = getTodayHabits(config);
    promise.then((res) => {
      console.log(res.data);
      setTodayHabits(res.data);
    });
  }

  function SelectHabitDone(TodayHabitId, done) {
    if (done) {
      const promise = RequestHabitUncheck(TodayHabitId, config);
      console.log(promise);
      promise.then((res) => {
        renderTodayHabits();
        console.log(res);
      });
    } else {
      const promise = RequestHabitDone(TodayHabitId, config);

      promise.then((res) => {
        renderTodayHabits();
      });
    }
  }

  function HabitCard({
    habitName,
    highestSequence,
    currentSequence,
    done,
    id,
  }) {
    return (
      <Card color={done ? "#8FC549" : "#EBEBEB"}>
        <h2>{habitName}</h2>
        <span>
          Sequência atual: {currentSequence}{" "}
          {currentSequence == 1 ? "dia" : "dias"}
        </span>
        <span>
          Seu recorde: {highestSequence}{" "}
          {highestSequence == 1 ? "dia" : "dias"}
        </span>
        <ion-icon
          onClick={() => SelectHabitDone(id, done)}
          name="checkmark-sharp"
        ></ion-icon>
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
          {TodayHabits.map((TodayHabit, index) => (
            <HabitCard
              key={index}
              id={TodayHabit.id}
              done={TodayHabit.done}
              habitName={TodayHabit.name}
              currentSequence={TodayHabit.currentSequence}
              highestSequence={TodayHabit.highestSequence}
            />
          ))}
        </HabitCards>
      </TodayStyle>
      <Footer />
    </>
  );
}
