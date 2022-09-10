import axios from "axios";

import { API_URL } from "utilities";

async function loginService(email, password) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("loginService: Error in Login", e);
  }
}

export { loginService };
