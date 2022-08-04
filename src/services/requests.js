import axios from "axios";


function registerUser(registerObject) {
  
  return axios.post(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    registerObject
  );
}

export { registerUser };
