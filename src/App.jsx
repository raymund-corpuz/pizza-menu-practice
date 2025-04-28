import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  //Early Return Start
  if (props.pizzaObj.soldOut) return null;
  //Early Return End

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  // const style = { color: "blue", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; // Store pizzaData a new variable
  const numPizzas = pizzas.length; // check if there is pizza
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* //Use && to Render List - START */}
      {
        numPizzas > 0 ? (
          // "if this is true"
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (
          <p>We're still working on our Menu</p>
        ) // "if this is false"
      }
      {/* // END */}
    </main>
  );
}

{
  /* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese"
        photoName="../pizzas/spinaci.jpg"
        price={10} // pass as a number
        //price="10"  pass as a string
      /> */
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    return <h3>Sorry we're closed. Come back again at {openHour}:00</h3>;

  return (
    <footer className="footer">
      {isOpen ? (
        // Extracting JSX Into new Component Start
        <Order closeHour={closeHour} />
      ) : (
        // Extracting JSX Into new Component End
        <p>Sorry we're closed. Come back again at {openHour}:00</p>
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
