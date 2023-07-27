import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Currency = (props) => {
  const [name, setName] = useState("£");
  const { dispatch } = useContext(AppContext);

  const submitEvent = () => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: name,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Choose Your Currency
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => {
              setName(event.target.value);
            }}
          >
            <option defaultValue value="£" name="Pound">
              £ Pound
            </option>
            <option value="$" name="Dollar">
              $ Dollar
            </option>

            <option value="€" name="Euro">
              € Euro
            </option>
          </select>

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Currency;
