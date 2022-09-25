import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "contexts";
import { addToOrdersInServer, clearCartInServer } from "services";
import { CART_OPERATION, SET_ORDERS } from "../constants";
import { useCartSummary } from "./useCartSummary";
import { toast } from "react-toastify";

function usePaymentIntegration() {
  const navigate = useNavigate();
  const { state, dispatch, deliveryAddress, setCoupon } = useData();
  const { getTotalPrice } = useCartSummary();
  const { authUser, authToken } = useAuth();

  const paymentSuccessful = async (rzpResponse) => {
    let response;
    response = await addToOrdersInServer(authToken, {
      items: state.cart,
      paymentId: rzpResponse.razorpay_payment_id,
      totalPrice: getTotalPrice(),
      deliveryAddress: deliveryAddress,
      orderDate: new Date(),
    });
    dispatch({ type: SET_ORDERS, payload: { orders: response.orders } });
    response = await clearCartInServer(authToken);
    setCoupon({});
    dispatch({ type: CART_OPERATION, payload: { cart: response.cart } });
    navigate("/profile/orders");
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
        paymentSuccessful(response);
      },
      prefill: {
        name: `${authUser.firstName} ${authUser.lastName}`,
        email: `${authUser.email}`,
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
