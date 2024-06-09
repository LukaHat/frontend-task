import { useEffect, useState } from "react";
import { getAll } from "../api/api-base";
import { Product } from "./Product";
import Cart from "./Cart";
import { ProductInfo } from "../types";
import { Header } from "./Header";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [cartItems, setCartItems] = useState<ProductInfo[]>([]);
  const [total, setTotal] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const fetchAllData = async () => {
    try {
      const resp = await getAll();
      setProducts(resp.map((item) => ({ ...item, quantity: 1 })));
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const addToCart = (product: ProductInfo) => {
    setTotal((prevTotal) => prevTotal + product.price.amount);
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);

      if (itemExists) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, product];
      }
    });
  };
  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <div>
      <Header toggleCartVisibility={toggleCartVisibility} />
      <main className="h-[95vh]">
        <div className="h-full w-screen flex">
          <ul className="w-full sm:w-full md:w-full lg:w-[80vw] h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 py-autos sm:pl-0 md:pl-0 lg:pl-40">
            {products.map((product) => (
              <li key={product.id} className="flex justify-center align-center">
                <Product product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
          <div
            className={`${
              isCartVisible ? "block" : "hidden"
            } lg:block bg-blue-500 text-white sm:bg-blue-500 sm:text-white md:bg-blue-500 md:text-white lg:bg-white lg:text-blue-500 fixed top-0 right-0 w-full h-full sm:w-full md:w-full lg:w-[20vw] lg:relative lg:border-l-2 border-blue-500`}
          >
            <Cart
              cartItems={cartItems}
              total={total}
              setCartItems={setCartItems}
              setTotal={setTotal}
              toggleCartVisibility={toggleCartVisibility}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
