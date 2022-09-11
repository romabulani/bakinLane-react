import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utilities";

const getOrdersFromServer = async (authToken) => {
  try {
    const response = await axios.get(`${API_URL}/api/user/orders`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("getOrdersFromServer : Error in fetching order history", e);
  }
};

const addToOrdersInServer = async (authToken, order) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user/orders`,
      { order },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      toast.success("Order placed successfully");
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    toast.error("Couldn't place order! Please try again.");
    console.error("addToOrdersInServer : Error in placing order", e);
  }
};

export { getOrdersFromServer, addToOrdersInServer };
