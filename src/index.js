import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { fruits } from "./foods";
import { choice, remove } from "./helpers";

const randomFruit = choice(fruits);
console.log(`I’d like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, randomFruit);
console.log(`I’m sorry, we’re all out. We have ${fruits} left.`)


ReactDOM.render(<App/>, document.getElementById("root"))