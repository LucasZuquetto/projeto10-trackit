import { useContext, useEffect, useState } from "react";
import {
  deleteHabitRequest,
  getHabits,
  sendHabitInfo,
} from "../services/requests";
import {
  AddHabits,
  ButtonInputHabit,
  DaySelect,
  HabitsStyle,
  InputHabit,
  MyHabits,
} from "../Styled-components/HabitsStyle";
import UserContext from "../UserContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Habits() {
  const { UserData } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${UserData.token}`,
    },
  };

  const [isCreatingHabit, setIsCreatingHabit] = useState(false);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [myHabits, setMyHabits] = useState([]);

  useEffect(() => {
    renderHabits();
  }, []);

  function renderHabits() {
    getHabits(config).then((e) => {
      console.log(e.data);
      setMyHabits(e.data);
    });
  }
  function deleteHabit(event) {
    const HabitIndex = event.target.getAttribute("habitid");
    const promise = deleteHabitRequest(config, HabitIndex);
    console.log(promise);
    promise.then(() => renderHabits());
  }

  function createHabit() {
    const promise = sendHabitInfo({ name: name, days: days }, config);
    promise.then(() => {
      renderHabits();
      setName("");
      setDays([]);
      setIsCreatingHabit(false);
    });
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

  function HabitsList() {
    return (
      <div>
        {myHabits.map((habit, index) => (
          <MyHabits key={index}>
            <h1>{habit.name}</h1>
            <div>
              <DaySelect
                fontcolor={habit.days.includes(0) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
              >
                D
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(1) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
              >
                S
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(2) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
              >
                T
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(3) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
              >
                Q
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(4) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
              >
                Q
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(5) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
              >
                S
              </DaySelect>
              <DaySelect
                fontcolor={habit.days.includes(6) ? "#FFFFFF" : "#dbdbdb"}
                backcolor={habit.days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
              >
                S
              </DaySelect>
            </div>
            <ion-icon
              onClick={deleteHabit}
              habitid={habit.id}
              name="trash-outline"
            ></ion-icon>
          </MyHabits>
        ))}
      </div>
    );
  }
  return (
    <>
      <Header />
      <HabitsStyle>
        <AddHabits>
          <h1>Meus hábitos</h1>
          <div onClick={() => setIsCreatingHabit(true)}>+</div>
        </AddHabits>
        <InputHabit display={isCreatingHabit ? "flex" : "none"}>
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
            <ButtonInputHabit
              onClick={() => setIsCreatingHabit(false)}
              color="#52B6FF"
              backgroundcolor="#FFFFFF"
            >
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
        {myHabits == false ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          <HabitsList />
        )}
      </HabitsStyle>
      <Footer />
    </>
  );
}
