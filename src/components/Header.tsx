import basket from "../assets/images/basket.svg";
export const Header = ({
  toggleCartVisibility,
}: {
  toggleCartVisibility: () => void;
}) => {
  const handleClick = () => {
    toggleCartVisibility();
  };

  return (
    <header className="flex w-screen px-5 justify-between items-center bg-orange-500 h-[5vh]">
      <h1 className="text-white text-2xl ">Košarica</h1>
      <button className="block sm:block md:block lg:hidden">
        <img src={basket} alt="shopping-cart" onClick={handleClick} />
      </button>
    </header>
  );
};
