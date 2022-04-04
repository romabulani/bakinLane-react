import { useAuth, useData, useEditAddress } from "contexts";
import {
  addAddressInServer,
  removeAddressFromServer,
  updateAddressInServer,
} from "services";
import { SET_ADDRESS } from "../constants";

function useAddress() {
  const { dispatch } = useData();
  const { authToken } = useAuth();
  const { setShowAddressModal, setEditAddress, editAddress } = useEditAddress();

  const addAddress = async (address, setDisable) => {
    setDisable(true);
    try {
      const response = await addAddressInServer(authToken, address);
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      setShowAddressModal(false);
      return response.data;
    } catch (e) {
      setDisable(false);
    }
  };

  const updateAddress = async (address, setDisable) => {
    setDisable(true);
    try {
      const response = await updateAddressInServer(
        authToken,
        editAddress._id,
        address
      );
      dispatch({
        type: SET_ADDRESS,
        payload: { address: response.address },
      });
      return response.data;
    } finally {
      setEditAddress(null);
      setDisable(false);
      setShowAddressModal(false);
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
    } catch (e) {
      setDisable(false);
    }
  };
  return { addAddress, updateAddress, removeAddress };
}

export { useAddress };
