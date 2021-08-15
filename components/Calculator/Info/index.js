import { useSelector } from "react-redux";
import InfoRow from "./InfoRow";
import Reset from "./Reset";
import { getTip, getTotal } from "../../../helpers";

function Info() {
  const currentState = useSelector((state) => state);
  return (
    <div className="flex flex-col px-5 md:px-7 pt-8 md:pt-9 pb-6 md:pb-9 w-full md:w-1/2 bg-cyan-darkest rounded-xl">
      <ul>
        <InfoRow label="Tip Amount" amount={getTip(currentState)} />
        <InfoRow label="Total" amount={getTotal(currentState)} />
      </ul>
      <Reset />
    </div>
  );
}

export default Info;
