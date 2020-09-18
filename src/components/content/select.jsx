import React from "react";
import "../../App.css";

export default function SimpleSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div class="select">
      <p>Select Account</p>
      <select name="slct" id="slct">
        <option selected disabled>
          Coca Cola
        </option>
        <option value="1">Coca</option>
        <option value="2">and</option>
        <option value="3">Cola</option>
      </select>
    </div>
  );
}
