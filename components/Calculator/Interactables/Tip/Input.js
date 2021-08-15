import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setTip } from "../../../../actions";

function TipInput() {
  const {
    watch,
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const watchAllFields = watch();
  const dispatch = useDispatch();

  function updateTip(e) {
    dispatch(setTip(e.target.value));
  }

  const tipInput = register("tipInput", { required: true });
  return (
    <li className="py-[0.4rem] px-[0.4rem] w-1/2 md:w-1/3">
      <input
        type="number"
        placeholder="Custom"
        className={
          "placeholder-cyan-dark-gray-2 text-center py-[0.4rem] text-[1.1rem] " +
          (errors["tipInput"]?.type ||
          parseFloat(watchAllFields["tipInput"]) === 0
            ? "ring-1 ring-yellow-500"
            : "focus:ring-cyan")
        }
        {...tipInput}
        onChange={(e) => {
          tipInput.onChange(e);
          updateTip(e);
        }}
      />
    </li>
  );
}

export default TipInput;
