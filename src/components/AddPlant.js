import React, { useState } from "react";

function AddPlant() {
  //the initial state of your form is an object with a name image and price keys whose values are set to "","",0
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add plant");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Plant Added", data);
        setPlantData({
          name: "",
          image: "",
          price: 0,
        });
      })
      .catch((error) => console.log("Error:", error.message));
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <p>Add in the description of the plant</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantData.name}
          onChange={handleChange}
        />
        <input
          type="Image url"
          name="image"
          placeholder="Image URL"
          value={plantData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default AddPlant;