import React from "react";

function AddPlant() {
  return (
    <div className="new-plant-form-1">
      <h2>New Plant</h2>
      <p>Add in the description of the plant</p>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="Image url" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default AddPlant;