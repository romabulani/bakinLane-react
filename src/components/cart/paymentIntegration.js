const paymentSuccessful = async () => {
  const response = await clearCartInServer(authToken);
  dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
};

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const displayRazorpay = async () => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Please check your internet connection");
    return;
  }
  const options = {
    key: process.env.REACT_APP_RZP_KEY,
    amount: getTotalPrice() * 100,
    currency: "INR",
    name: "Bakin Lane",
    description: "Thank you for shopping with us",
    image:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649076577/ecommerce/logo_sr3h5w.webp",
    handler: function (response) {
      paymentSuccessful();
    },
    prefill: {
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      email: `${currentUser.email}`,
      contact: deliveryAddress.mobile,
    },
    theme: {
      color: "#6d28d9",
    },
    notes: {
      address: `${deliveryAddress?.name}, ${deliveryAddress?.street}, ${deliveryAddress?.city}, ${deliveryAddress?.zipCode}`,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
