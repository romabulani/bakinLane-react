import { useReducer } from "react";
import { useAddress } from "./useAddress";

function useAddressHandler() {
  const { addAddress, updateAddress } = useAddress();

  const initialFormState = {
    name: "",
    street: "",
    city: "",
    state: "Maharashtra",
    zipCode: "",
    mobile: "",
  };

  const initialErrorState = {
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_NAME":
        return {
          ...state,
          name: action.payload,
        };
      case "INPUT_STREET":
        return {
          ...state,
          street: action.payload,
        };
      case "INPUT_CITY":
        return {
          ...state,
          city: action.payload,
        };
      case "INPUT_STATE":
        return {
          ...state,
          state: action.payload,
        };
      case "INPUT_ZIPCODE":
        return {
          ...state,
          zipCode: action.payload,
        };
      case "INPUT_MOBILE":
        return {
          ...state,
          mobile: action.payload,
        };
      case "FILL_DUMMY_VALUES":
        return {
          ...state,
          name: "John Doe",
          street: "Near Apollo Hospital",
          city: "Kharghar",
          zipCode: "450101",
          mobile: "6986738689",
        };
      case "INITIALISE_ADDRESS":
        return {
          ...state,
          name: action.payload.address.name,
          street: action.payload.address.street,
          city: action.payload.address.city,
          state: action.payload.address.state,
          zipCode: action.payload.address.zipCode,
          mobile: action.payload.address.mobile,
        };
    }
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_NAME":
        return {
          ...state,
          name: action.payload,
        };
      case "ERROR_STREET":
        return {
          ...state,
          street: action.payload,
        };
      case "ERROR_CITY":
        return {
          ...state,
          city: action.payload,
        };
      case "ERROR_STATE":
        return {
          ...state,
          state: action.payload,
        };
      case "ERROR_ZIPCODE":
        return {
          ...state,
          zipCode: action.payload,
        };
      case "ERROR_MOBILE":
        return {
          ...state,
          mobile: action.payload,
        };
    }
  };

  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );
  const [formData, formDispatch] = useReducer(formReducer, initialFormState);

  const checkValidation = () => {
    let addressFlag = true;

    if (!new RegExp("[A-Za-z]+").test(formData.name)) {
      errorDispatch({
        type: "ERROR_NAME",
        payload: "Name should have only letters",
      });
      addressFlag = false;
    }

    if (formData.street.trim() === "") {
      errorDispatch({
        type: "ERROR_STREET",
        payload: "Enter valid street details",
      });
      addressFlag = false;
    }

    if (formData.city.trim() === "") {
      errorDispatch({
        type: "ERROR_CITY",
        payload: "Enter valid city details",
      });
      addressFlag = false;
    }

    if (
      !new RegExp("[0-9]{6}").test(formData.zipCode) ||
      formData.zipCode.length != 6
    ) {
      errorDispatch({
        type: "ERROR_ZIPCODE",
        payload: "Enter valid zipcode",
      });
      addressFlag = false;
    }

    if (
      !new RegExp("[0-9]{10,10}").test(formData.mobile) ||
      formData.mobile.length != 10
    ) {
      errorDispatch({
        type: "ERROR_MOBILE",
        payload: "Enter valid mobile number",
      });
      addressFlag = false;
    }

    return addressFlag;
  };

  const addAddressHandler = (setDisable) =>
    checkValidation() && addAddress(formData, setDisable);

  const editAddressHandler = (setDisable) =>
    checkValidation() && updateAddress(formData, setDisable);

  return {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    addAddressHandler,
    editAddressHandler,
  };
}

export { useAddressHandler };
