import React, { useState } from "react";
import Message from "./Message";

const Quiz = ({ displayQuiz, handleSubmit }) => {
  const [hideFomr, setHideForm] = useState("");
  const [hideMessage, setHideMessage] = useState("none");
  const validateInputs = (inputs) => {
    const { color1, color2, color3, flower, date } = inputs;

    const colors = [
      color1.toLowerCase(),
      color2.toLowerCase(),
      color3.toLowerCase(),
    ];
    const validColors = ["black", "white", "yellow"];
    const colorsValid = colors.every((color) => validColors.includes(color));

    const validFlower = flower.toLowerCase() === "sunflower";

    const validDate = date === "2023-07-02";

    return colorsValid && validFlower && validDate;
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const inputsAreValid = validateInputs(formValues);

    if (inputsAreValid) {
      setHideMessage("");
      setHideForm("none");
    } else {
      alert("Nako, ikaw ba talaga yan?");
    }
  };
  return (
    <main style={{ display: displayQuiz }}>
      <form
        className="form"
        onSubmit={handleSubmitForm}
        style={{ display: hideFomr }}>
        <p className="par">Is that really you?</p>
        <label className="labelColor">
          Color
          <input
            type="text"
            name="color1"
            id="color1"
            required
            placeholder="fav color"
          />
          <input
            type="text"
            name="color2"
            id="color2"
            required
            placeholder="fav color "
          />
          <input
            type="text"
            name="color3"
            id="color3"
            required
            placeholder="fav color "
          />
        </label>

        <label className="labelFlower">
          Flower
          <input
            type="text"
            name="flower"
            id="flower"
            required
            placeholder="fav flower "
          />
        </label>

        <label className="labelMonth">
          Monthsarry
          <input
            type="date"
            name="date"
            id="date"
            placeholder="YYYY-MM-DD"
            required
          />
        </label>

        <button type="submit" formtarget="_blank">
          Submit
        </button>
      </form>
      <Message hideMessage={hideMessage} />
    </main>
  );
};

export default Quiz;
