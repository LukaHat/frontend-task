import { ProductInfo } from "../types";
import CartItem from "./CartItem";

import mark from "../assets/images/mark-black.svg";

const Cart = ({
  cartItems,
  total,
  setCartItems,
  setTotal,
  toggleCartVisibility,
}: {
  cartItems: ProductInfo[];
  total: number;
  setCartItems: (items: ProductInfo[]) => void;
  setTotal: (total: number) => void;
  toggleCartVisibility: () => void;
}) => {
  const handleDelete = (id: number, quantity: number, price: number) => {
    const updatedItems: ProductInfo[] =
      quantity > 1
        ? cartItems.map((item) =>
            item.id === id ? { ...item, quantity: quantity - 1 } : item
          )
        : cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    setTotal(Math.abs(total - price));
  };

  const handleClick = () => {
    toggleCartVisibility();
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="w-full flex justify-between items-center px-10">
        <h2 className="pb-5 text-black text-2xl">Košarica</h2>
        <button
          onClick={handleClick}
          className="flex justify-center items-center h-full pb-5 lg:hidden"
        >
          <img src={mark} alt="close" className="h-auto w-[15%]" />
        </button>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              img={item.image}
              name={item.name}
              price={item.price.amount}
              currency={item.price.currency}
              quantity={item.quantity}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
      <hr className="w-full bg-black h-[0.4vh]" />
      <div className="self-start pl-10">
        <p className="text-black">Ukupan iznos:</p>
        <p className="text-4xl text-green-500 font-bold">
          {total.toFixed(2)}kn
        </p>
      </div>
    </div>
  );
};

export default Cart;
