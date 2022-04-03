import { useState } from "react";
import { useEditAddress } from "contexts";
import { useAddress } from "hooks";

function AddressCard({ address }) {
  const { removeAddress } = useAddress();
  const [disable, setDisable] = useState(false);
  const { setShowAddressModal, setEditAddress } = useEditAddress();
  return (
    <div className="address-card">
      <div>{address.name}</div>
      <div>{address.street}</div>
      <div>
        {address.city} - {address.zipCode}
      </div>
      <div>{address.state}</div>
      <div>Mobile : {address.mobile}</div>
      <div className="flex-row-center">
        <button
          className="btn btn-primary btn-fit-content address-card-btn"
          disabled={disable}
          onClick={() => {
            setShowAddressModal(true);
            setEditAddress(address);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-default btn-fit-content address-card-btn"
          disabled={disable}
          onClick={() => removeAddress(address, setDisable)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export { AddressCard };
