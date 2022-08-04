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

export { registerUser, loginUser };