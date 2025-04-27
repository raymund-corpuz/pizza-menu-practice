import React from "react";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;

function Pizza() {
  return (
    <div>
      <h3>Pizza Spinaci</h3>
      <img src="../pizzas/spinaci.jpg" alt="Spinaci" />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>;
      <Pizza />;
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("Were currently open");
  // else "sorry we are close";
  // console.log(hour);
  return (
    <footer> {new Date().toLocaleTimeString()}We're currently Open</footer>
  );
}
