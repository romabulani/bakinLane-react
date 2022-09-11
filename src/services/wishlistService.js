import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "utilities";

const getWishlist = async (authToken) => {
  try {
    const response = await axios.get(`${API_URL}/api/user/wishlist`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.error("getWishlist : Error in fetching wishlist details", e);
  }
};

const addToWishlist = async (authToken, product) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user/wishlist`,
      { product },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      toast.success("Added to wishlist!");
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    toast.error("Couldn't add to wishlist! Please try again.");
    console.error("addToWishlist : Error in adding product to wishlist", e);
  }
};

const removeFromWishlist = async (authToken, id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/user/wishlist/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      toast.success("Removed from wishlist!");
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    toast.error("Couldn't remove from wishlist! Please try again.");
    console.error(
      "removeFromWishlist : Error in removing product from wishlist",
      e
    );
  }
};

export { getWishlist, addToWishlist, removeFromWishlist };
