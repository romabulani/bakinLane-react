import axios from "axios";

const getCart = async (authToken) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("getCart : Error in fetching cart details", e);
  }
};

const addToCart = async (authToken, product) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("addToCart : Error in adding product to cart", e);
  }
};

const updateQuantityInCart = async (authToken, id, type) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: type,
        },
      },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("updateQuantity : Error in updating product in cart", e);
  }
};

const removeFromCart = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("removeFromCart : Error in removing product from cart", e);
  }
};
export { getCart, addToCart, updateQuantityInCart, removeFromCart };
