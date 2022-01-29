import React, { useState } from "react";
import Item from "./Item";

const getListItems = (items) => items.map(item => <Item key={item.id} name={item.name} category={item.category} />)

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [listedItems, _] = useState(() => getListItems(items))
  
  const selectOnClick = (e)=>{
    setSelectedCategory(e.target[e.target["selectedIndex"]].value)
  }
  
  const filterLists = ()=> listedItems.filter(item => item.props.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectOnClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
         selectedCategory === "All" ? listedItems:filterLists()
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
