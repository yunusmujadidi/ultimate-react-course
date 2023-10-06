import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  //react fragment
  //creating new list of pizzas from pizzaData using map method
  // ternary operator for conditional rendering
  const pizzas = pizzaData;
  const isSoldOut = pizzas.length > 0;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {isSoldOut ? (
        <>
          <p>
            Authentic Italian cuisine. All pizzas are 11 inches and 6 slices.
            All from our wood-fired oven to your table in 5 minutes!
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we're currently out of pizzas!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log({ pizzaObj });
  const isSoldOut = pizzaObj.soldOut;
  // class conditional rendering for text conditionally rendered
  return (
    <li className={`pizza${isSoldOut ? " soldOut" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {isSoldOut && <span className="soldOut">Sold Out!</span>} */}
        <span>{isSoldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 1;
  const isOpen = hour <= openHour && hour >= closedHour;
  // if (hour <= openHour && hour >= closedHour) alert("We're Currently Open!");
  // else alert("Sorry We're Currenly Closed");
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <div className="order">
          <h3>
            Sorry, We're Currently Closed. We're open from {openHour}:00 to{" "}
            {closedHour}:00
          </h3>
        </div>
      )}
    </footer>
  );
}
//send data to child component using props
//destructuring props = ({closedHour, openHour}})
function Order({ closedHour, openHour }) {
  return (
    <div className="order">
      <h3>
        We're Currently Open from {openHour}:00 until {closedHour}:00. Please
        visit us or order online!
      </h3>
      <button className="btn">ORDER NOW</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
