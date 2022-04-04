import { useData, useEditAddress } from "contexts";
import { AddAddressModal } from "./AddAddressModal";
import { AddressCard } from "./AddressCard";

function Address() {
  const { showAddressModal, setShowAddressModal } = useEditAddress();
  const { state } = useData();

  return (
    <div className="flex-row-start">
      <div className="flex-column-center">
        <div className="flex-column-center">
          {state.address.map((eachAddress) => {
            return (
              <AddressCard
                key={eachAddress._id}
                address={eachAddress}
              ></AddressCard>
            );
          })}
        </div>
        <button
          className="add-address-btn"
          onClick={() => setShowAddressModal(true)}
        >
          + ADD NEW ADDRESS
        </button>
        {showAddressModal && <AddAddressModal />}
      </div>
    </div>
  );
}

export { Address };
