import React from "react";


function Pizza({item , editPizza}) {



  return (
    <tr>
      <td>{item.topping}</td>
      <td>{item.size}</td>
      <td>{(item.vegetarian) ? "YES" :"NO"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={()=>editPizza(item.id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
