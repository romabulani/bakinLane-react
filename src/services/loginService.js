import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utilities";

async function loginService(email, password) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      toast.success("Log In successful");
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    toast.error(`Couldn't Login! Please try again.`);
    console.error("loginService: Error in Login", e);
  }
}

export { loginService };
