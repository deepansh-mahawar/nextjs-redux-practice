import Image from "next/image";
import { Counter } from "./features/Counter";
import LightBulb from "./features/LightBulb";
import FoodList from "./features/FoodList";
import { Cart } from "./features/Cart";

export default function Home() {
  return (
    <div>
      <h1>Vite + Next + Redux Toolkit </h1>
      {/* <Counter /> */}
      {/* <LightBulb/> */}
      {/* <FoodList/> */}
      <Cart/>
    </div>
  );
}
