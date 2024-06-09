const CartItem = ({
  id,
  img,
  name,
  price,
  currency,
  quantity,
  handleDelete,
}: {
  id: number;
  img: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  handleDelete(id: number, quantity: number, price: number): void;
}) => {
  const handleClick = () => {
    handleDelete(id, quantity, price);
  };

  return (
    <div className="flex justify-between mb-5 w-full h-[8vh]">
      <img src={img} alt={name} className="w-[20%] h-auto" />
      <div className="flex flex-col pl-3 w-[70%]">
        <h3>
          {quantity}x {name}
        </h3>
        <p>
          Ukupno:
          {(price * quantity).toFixed(2)}
          {currency.toLocaleLowerCase()}
        </p>
      </div>
      <button
        className="border-2 w-[7%] h-5 mr-[5%] text-xs border-white sm:border-white md:border-white lg:border-blue-500 text-white lg:text-blue-500 rounded-[100%] transition duration-300ms lg:hover:text-white lg:hover:bg-blue-500"
        onClick={handleClick}
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
