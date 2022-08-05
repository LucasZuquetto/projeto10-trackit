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
    createHabitObject, config
  );
}

export { registerUser, loginUser, sendHabitInfo };
