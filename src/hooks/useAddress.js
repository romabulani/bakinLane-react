import { SET_ADDRESS } from "../constants";
import { useAuth, useData } from "contexts";
import {
  getAddressFromServer,
  addAddressInServer,
  removeAddressFromServer,
  updateAddressInServer,
} from "services";

function useAddress() {
  const { state, dispatch } = useData();
  const { authToken } = useAuth();

  const addAddress = async (address, setDisable) => {
    setDisable(true);
    try {
      const response = await addAddressInServer(authToken, address);
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      return response.data;
    } finally {
      setDisable(false);
    }
  };

  const updateAddress = async (address, setDisable) => {
    setDisable(true);
    try {
      const response = await updateAddressInServer(authToken, address._id);
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      return response.data;
    } finally {
      setDisable(false);
    }
  };

  const removeAddress = async (address, setDisable) => {
    setDisable(true);
    try {
      const response = await removeAddressFromServer(authToken, address._id);
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      return response.data;
    } finally {
      setDisable(false);
    }
  };
  return { addAddress, updateAddress, removeAddress };
}

export { useAddress };
