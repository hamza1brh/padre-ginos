import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        image={"/public/pizzas/pepperoni.webp"}
        name="Pepperoni"
        description="pep , cheese , n stuff"
      />
      <Pizza
        image={"/public/pizzas/hawaiian.webp"}
        name="hawaiian"
        description="pineapple"
      />
      <Pizza
        image={"/public/pizzas/big_meat.webp"}
        name="Americano"
        description="french frize and hot dogs"
      />
    </div>
  );
};

const container = document.getElementById("root");
// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);
root.render(<App />);
