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
  return (
    <footer> {new Date().toLocaleTimeString()}We're currently Open</footer>
  );
}
