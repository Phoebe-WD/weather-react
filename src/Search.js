import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row search-engine">
          <div className="col-6">
            <input
              type="search"
              className="form-control"
              id="validationTooltipUsername"
              placeholder="Search City"
              onChange={updateCity}
              aria-describedby="validationTooltipUsernamePrepend"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search 🌎"
              className="btn search-submit "
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Current Location 🏠"
              className="btn search-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}