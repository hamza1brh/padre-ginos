import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's - Order Now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);
root.render(<App />);
