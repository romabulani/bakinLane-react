import axios from "axios";

const getWishlist = async (authToken) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("getWishlist : Error in fetching wishlist details", e);
  }
};

const addToWishlist = async (authToken, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product: product },
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
    console.log("addToWishlist : Error in adding product to wishlist", e);
  }
};

async function removeFromWishlist(id, authToken) {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(
      "removeFromWishlist : Error in removing product from wishlist",
      e
    );
  }
}

export { getWishlist, addToWishlist, removeFromWishlist };
