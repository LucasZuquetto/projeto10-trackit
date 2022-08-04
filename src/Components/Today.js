import Footer from "./Footer";
import Header from "./Header";
import DayJS from "react-dayjs";
import dayjs from "dayjs";
import styled from "styled-components";

export default function Today() {
  const dayjs = require("dayjs");
  //   dayjs.extend(updateLocale);

  //   dayjs.updateLocale("pt", {
  //     weekdays: [
  //       "Doming",
  //       "Segunda",
  //       "Terça",
  //       "Quarta",
  //       "Quinta",
  //       "Sexta",
  //       "Sábado",
  //     ],
  //   });
  console.log(dayjs().format());

  function HabitCard() {
    return (
      <Card>
        <h2>Ler 1 capítulo de livro</h2>
        <span>Sequência atual: 3 dias</span>
        <span>Seu recorde: 5 dias</span>
      </Card>
    );
  }

  return (
    <>
      <Header />
      <TodayStyle>
        <div>
          <h1>{dayjs().format("dddd, DD/MM")}</h1>
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
const HabitCards = styled.div`
  width: 100vw;
  box-sizing: border-box;
`;
const TodayStyle = styled.div`
  /* padding: 110px 15px 0 15px; */
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

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  span {
    font-size: 13px;
    margin-bottom: 2px;
  }
`;
