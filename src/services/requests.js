import axios from "axios";

function registerUser(registerObject) {
  return axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    registerObject
  );
}
function loginUser(loginObject) {
  return axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    loginObject
  );
}
function sendHabitInfo(createHabitObject, config) {
  return axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    createHabitObject,
    config
  );
}
function getHabits(config) {
  return axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    config
  );
}
function deleteHabitRequest(config, HabitID) {
  return axios.delete(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitID}`,
    config
  );
}
function getTodayHabits(config) {
  return axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    config
  );
}
function RequestHabitDone(TodayHabitId, config) {
  return axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitId}/check`,
    {},
    config
  );
}
function RequestHabitUncheck(TodayHabitId, config) {
  return axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${TodayHabitId}/uncheck`,
    {},
    config
  );
}

export {
  registerUser,
  loginUser,
  sendHabitInfo,
  getHabits,
  deleteHabitRequest,
  getTodayHabits,
  RequestHabitDone,
  RequestHabitUncheck,
};
