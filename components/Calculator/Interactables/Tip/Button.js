import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTip } from "../../../../actions";

function TipButton({ value }) {
  const dispatch = useDispatch();
  const currentTip = useSelector((state) => state.tip);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(value == currentTip);
  }, [value, currentTip]);

  return (
    <li className="py-[0.4rem] px-[0.4rem] w-1/2 md:w-1/3">
      <button
        onClick={() => dispatch(setTip(value))}
        type="button"
        className={
          "w-full rounded-md py-[0.4rem] text-[1.1rem] font-bold " +
          (isActive
            ? "bg-cyan text-cyan-darkest"
            : "text-white bg-cyan-darkest hover:bg-cyan-light-gray-1 hover:text-cyan-darkest")
        }
      >
        {value}%
      </button>
    </li>
  );
}

export default TipButton;
