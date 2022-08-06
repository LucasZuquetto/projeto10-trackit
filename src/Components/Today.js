import Footer from "./Footer";
import Header from "./Header";
import {
  Card,
  CurrentSequenceSpan,
  HabitCards,
  HighestSequenceSpan,
  TodayStyle,
} from "../Styled-components/TodayStyle";
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
  const [count, setCount] = useState()
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
      setCount(res.data.filter(item => item.done).length)
    });
  }
  function SelectHabitDone(TodayHabitId, done) {
    if (done) {
      const promise = RequestHabitUncheck(TodayHabitId, config);
      console.log(promise);
      promise.then((res) => {
        renderTodayHabits();
        setCount(count-1)
        console.log(res);
      });
    } else {
      const promise = RequestHabitDone(TodayHabitId, config);

      promise.then(() => {
        renderTodayHabits();
        setCount(count+1)
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
          Sequência atual:{" "}
          <CurrentSequenceSpan
            CurrentSequenceColor={done ? "#8FC549" : "#666666"}
          >
            {currentSequence} {currentSequence === 1 ? "dia" : "dias"}
          </CurrentSequenceSpan>
        </span>
        <span>
          Seu recorde:{" "}
          <HighestSequenceSpan
            HighestSequenceColor={
              done && highestSequence === currentSequence
                ? "#8FC549"
                : "#666666"
            }
          >
            {highestSequence} {highestSequence === 1 ? "dia" : "dias"}
          </HighestSequenceSpan>
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
          <p>{TodayHabits.findIndex((item) => item.done === true) === -1
              ? "Nenhum hábito concluído ainda"
              : `${((count/TodayHabits.length)*100).toFixed(0)}% dos habitos concluidos`}</p>
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
