import Input from "./Input";
import TipButton from "./Tip/Button";
import TipInput from "./Tip/Input";
import Image from "next/image";
import DollarSign from "../../../public/icon-dollar.svg";
import Person from "../../../public/icon-person.svg";

function Interactables() {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="py-3 pr-2 md:pr-7 pl-2 mb-4 md:mb-0 w-full md:w-1/2">
      <Input label="Bill" name="bill" className="mb-7">
        <Image src={DollarSign} alt="Input icon for bill" />
      </Input>
      <h2 className="text-cyan-dark-gray-2">Select Tip %</h2>
      <ul className="flex flex-wrap mx-[-0.4rem] mb-7">
        {tips.map((tip, index) => {
          return <TipButton key={index} value={tip} />;
        })}
        <TipInput />
      </ul>
      <Input label="Number of People" name="people">
        <Image src={Person} alt="Input icon for people" />
      </Input>
    </div>
  );
}

export default Interactables;
