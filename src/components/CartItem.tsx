import close from "../assets/images/mark-black.svg";

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
        <h3 className="text-black font-bold">
          {quantity}x {name}
        </h3>
        <p className="flex flex-row gap-1 text-black">
          Ukupno:
          <span className="text-green-500 font-bold">
            {(price * quantity).toFixed(2)}
            {currency.toLocaleLowerCase()}
          </span>
        </p>
      </div>
      <button
        className=" w-[7%] h-5 mr-[5%] transition ease-in-out hover:scale-110"
        onClick={handleClick}
      >
        <img src={close} alt="close" className="w-[90%]" />
      </button>
    </div>
  );
};

export default CartItem;
