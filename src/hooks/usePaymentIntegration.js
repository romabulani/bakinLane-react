import { useAuth, useData } from "contexts";
import { clearCartInServer } from "services";
import { CART_OPERATION } from "../constants";
import { useCartSummary } from "./useCartSummary";
import { toast } from "react-toastify";

function usePaymentIntegration() {
  const { dispatch, deliveryAddress } = useData();
  const { getTotalPrice } = useCartSummary();
  const { authUser, authToken } = useAuth();
  const currentUser = JSON.parse(authUser);

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

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

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
        console.log(response);
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
    paymentObject.on("payment.failed", function (response) {
      toast.error("Something went wrong! Please try again later");
    });
    paymentObject.open();
  };

  return { paymentSuccessful, loadScript, displayRazorpay };
}

export { usePaymentIntegration };
