import React, { useContext } from "react";
import { ItemContext } from "../../Store/ItemContext";
const Items = () => {
  const { items } = useContext(ItemContext);

  return (
    <>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td>{item.category}</td>
            <td>{item.category}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Items;
