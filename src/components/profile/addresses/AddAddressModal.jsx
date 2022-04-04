import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEditAddress } from "contexts";
import { useAddressHandler } from "hooks";

function AddAddressModal() {
  const {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    addAddressHandler,
    editAddressHandler,
  } = useAddressHandler();

  const [disable, setDisable] = useState(false);
  const { setShowAddressModal, editAddress } = useEditAddress();

  useEffect(() => {
    if (editAddress) {
      formDispatch({
        type: "INITIALISE_ADDRESS",
        payload: { address: editAddress },
      });
    }
  }, []);

  return (
    <div className="address-modal-container ">
      <div className="address-modal flex-column-center">
        <div className="modal-header">ADD NEW ADDRESS</div>
        <form>
          <div className="form-input address-input">
            <input
              type="text"
              placeholder="Enter Name *"
              className="input-primary border-box"
              value={formData.name}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_NAME",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_NAME",
                  payload: "",
                })
              }
              required
            />
          </div>
          {errorData.name.length > 0 && (
            <div className="error address-error">
              <FontAwesomeIcon
                icon="circle-exclamation"
                className="error-icon"
              ></FontAwesomeIcon>
              {"    "}
              <div> {errorData.name}</div>
            </div>
          )}

          <div className="form-input address-input">
            <input
              type="text"
              placeholder="Enter house no, street *"
              className="input-primary border-box"
              value={formData.street}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_STREET",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_STREET",
                  payload: "",
                })
              }
              required
            />
          </div>
          {errorData.street.length > 0 && (
            <div className="error address-error">
              <FontAwesomeIcon
                icon="circle-exclamation"
                className="error-icon"
              ></FontAwesomeIcon>
              {"    "}
              <div> {errorData.street}</div>
            </div>
          )}

          <div className="form-input address-input">
            <select
              className="input-primary"
              type="select"
              value={formData.state}
              placeholder="Enter State"
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_STATE",
                  payload: e.target.value,
                })
              }
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Goa">Goa</option>
              <option value="Rajasthan">Rajasthan</option>
            </select>
          </div>

          <div className="form-input address-input">
            <input
              type="text"
              placeholder="Enter city *"
              className="input-primary border-box"
              value={formData.city}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_CITY",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_CITY",
                  payload: "",
                })
              }
              required
            />
          </div>
          {errorData.city.length > 0 && (
            <div className="error address-error">
              <FontAwesomeIcon
                icon="circle-exclamation"
                className="error-icon"
              ></FontAwesomeIcon>
              {"    "}
              <div> {errorData.city}</div>
            </div>
          )}

          <div className="form-input address-input">
            <input
              type="text"
              placeholder="Enter zipcode *"
              className="input-primary border-box"
              value={formData.zipCode}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_ZIPCODE",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_ZIPCODE",
                  payload: "",
                })
              }
              required
            />
          </div>
          {errorData.zipCode.length > 0 && (
            <div className="error address-error">
              <FontAwesomeIcon
                icon="circle-exclamation"
                className="error-icon"
              ></FontAwesomeIcon>
              {"    "}
              <div> {errorData.zipCode}</div>
            </div>
          )}

          <div className="form-input address-input">
            <input
              type="text"
              placeholder="Enter Mobile *"
              className="input-primary border-box"
              value={formData.mobile}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_MOBILE",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({
                  type: "ERROR_MOBILE",
                  payload: "",
                })
              }
              required
            />
          </div>
          {errorData.mobile.length > 0 && (
            <div className="error address-error">
              <FontAwesomeIcon
                icon="circle-exclamation"
                className="error-icon"
              ></FontAwesomeIcon>
              {"    "}
              <div> {errorData.mobile}</div>
            </div>
          )}

          <div className="address-btn-container">
            <input
              type="submit"
              className="btn btn-primary btn-fit-content"
              disabled={disable}
              value="Save"
              onClick={(e) => {
                e.preventDefault();
                editAddress
                  ? editAddressHandler(setDisable)
                  : addAddressHandler(setDisable);
              }}
            />

            <button
              className="btn btn-outline-primary  btn-fit-content"
              onClick={() => setShowAddressModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary btn-fit-content"
              onClick={(e) => {
                e.preventDefault();
                formDispatch({ type: "FILL_DUMMY_VALUES" });
              }}
            >
              Fill with Dummy Adress
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { AddAddressModal };
