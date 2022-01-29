import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart,setInCart] = useState(false);

  return (
    <li className={isInCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>setInCart(!isInCart)}>{isInCart ? "Delete":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
