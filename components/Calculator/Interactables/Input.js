import { useForm } from "react-hook-form";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../actions";

function Input({ label, name, className = false, children }) {
  const {
    watch,
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const watchAllFields = watch();
  const dispatch = useDispatch();

  const currentValue = useSelector((state) => state[name]);

  function updateInput(e) {
    const { value } = e.target;
    if (value.length < 10) {
      dispatch(setValue(name, e.target.value || 0));
    } else {
      e.preventDefault();
    }
  }

  const input = register(name, { required: true });
  return (
    <div className={`relative${className ? " " + className : ""}`}>
      <label className="block text-cyan-dark-gray-2" htmlFor={`#${name}`}>
        {label}
      </label>
      <Error isError={errors[name]?.type} value={watchAllFields[name]} />
      <div className="relative">
        <input
          type="number"
          placeholder="0"
          className={
            "px-3 py-1 text-right text-[1.5rem] leading-tight " +
            (errors[name]?.type || parseFloat(watchAllFields[name]) === 0
              ? "ring-1 ring-yellow-500"
              : "focus:ring-cyan")
          }
          value={currentValue || ""}
          {...input}
          onChange={(e) => {
            input.onChange(e);
            updateInput(e);
          }}
        />
        <div className="flex absolute top-1/2 left-3 items-center -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Input;
