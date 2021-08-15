import { useDispatch } from "react-redux";
import { resetCalculator } from "../../../actions";

function Reset() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(resetCalculator())}
      type="button"
      className="p-2 mt-auto w-full font-bold hover:text-cyan-darkest uppercase bg-cyan hover:bg-cyan-light-gray-1 rounded-md text-bg-cyan-darkest"
    >
      Reset
    </button>
  );
}

export default Reset;
