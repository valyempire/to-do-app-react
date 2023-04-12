import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const addItem = () => {
    if (!newItem) {
      alert("Enter an Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((prevState) => [...prevState, item]);
    setNewItem("");
    // console.log(items);
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <input
        type="text"
        placeholder="add an item..."
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={addItem}>add item</button>

      <ol>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
