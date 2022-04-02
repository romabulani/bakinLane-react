import { useState, createContext, useContext } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  return (
    <AddressContext.Provider
      value={{
        showAddressModal,
        setShowAddressModal,
        editAddress,
        setEditAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useEditAddress = () => useContext(AddressContext);

export { AddressProvider, useEditAddress };
