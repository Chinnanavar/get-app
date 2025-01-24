import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [nData, setData] = useState(datas);
  console.log(datas[0].id);

  const handleClick = () => {
    setData([]);
  };

  const handleClick1 = (itemID) => {
    setData(nData.filter((item) => item.id !== itemID));
  };

  const handleClock2 = (itemID) => {
    setData(
      nData.map((items) => {
        if (items.id === itemID) {
          return { name: "newName" };
        } else {
          return items;
        }
      })
    );
  };
  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleClock2(items.id)}>Update</button>
            <button onClick={() => handleClick1(items.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default Data;
