import { ProductInfo } from "../types";

export const Product = ({
  product,
  addToCart,
}: {
  product: ProductInfo;
  addToCart: (product: ProductInfo) => void;
}) => {
  const { id, name, image: img } = product;
  const { amount: price, currency, measureUnit } = product.price;

  const separateDecimals = (price: number) => {
    const [beforeDecimal, afterDecimal = "00"] = price.toFixed(2).split(".");
    return {
      beforeDecimal,
      afterDecimal,
    };
  };

  const { beforeDecimal, afterDecimal } = separateDecimals(price);

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div
      key={id}
      className="w-[13vw] h-[40vh] flex flex-col justify-start items-center transition ease-in-out"
    >
      <img
        src={img}
        alt={name}
        className="h-auto max-w-[75%] min-w-[15vh] pt-[10%]"
      />
      <div className="flex flex-col items-center">
        <p className="py-[2.5%] px-[3%] w-full text-center">{name}</p>
        <div className="flex gap-1">
          <p className="text-3xl text-blue-500">{beforeDecimal}</p>
          <p className="flex flex-col text-xs">
            <span className="text-blue-500">{afterDecimal}</span>
            <span>
              {currency.toLocaleLowerCase()}/{measureUnit.toLocaleLowerCase()}
            </span>
          </p>
        </div>
        <button
          className="border-2 py-1 px-5 mt-2 bg-white text-blue-500 border-blue-500 transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-500"
          onClick={handleAdd}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};
