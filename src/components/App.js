import React, {useState, useEffect}  from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaMenu, setPizzaMenu] = useState([])
  const URL = "http://127.0.0.1:3001/pizzas"

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setPizzaMenu(data))

  },[])

  function editPizza(id){
    console.log(id)
    
  }


  return (
    <>
      <Header />
      <PizzaForm  />
      <PizzaList pizzaMenu={pizzaMenu} editPizza ={editPizza} />
    </>
  );
}

export default App;
