import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaMenu, editPizza}) {
  console.log(pizzaMenu)



  const pizzaMenuListed = pizzaMenu.map((item)=> {
    return (
      <Pizza
      key = {item.id}
      item = {item}
      editPizza ={editPizza}/>
    )
  })


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaMenuListed}
      </tbody>
    </table>
  );
}

export default PizzaList;
