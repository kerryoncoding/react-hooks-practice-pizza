import React, {useState, useEffect}  from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaMenu, setPizzaMenu] = useState([])
  const [pizzaFormItem, setPizzaFormItem] = useState([])

  const URL = "http://127.0.0.1:3001/pizzas"

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setPizzaMenu(data))

  },[])

  function editPizza(id){
    // console.log(id)
    let tempPizza = pizzaMenu.map((item)=>item)
    let filteredPizza = tempPizza.filter((item) => item.id == id)
    // console.log(filteredPizza)  
    setPizzaFormItem(filteredPizza)
  }


  return (
    <>
      <Header />
      <PizzaForm pizzaFormItem={pizzaFormItem} />
      <PizzaList pizzaMenu={pizzaMenu} editPizza ={editPizza} />
    </>
  );
}

export default App;
