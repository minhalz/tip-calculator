import { useEffect, useState } from "react";

function InfoRow({ label, amount }) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(amount.length);
  }, [amount]);

  return (
    <li className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-white">{label}</h2>
        <span className="block text-[0.65rem] text-cyan-light-gray-1">
          / person
        </span>
      </div>
      <span
        className={
          "font-bold text-cyan " + (length < 8 ? "text-4xl" : "text-2xl")
        }
      >
        ${amount}
      </span>
    </li>
  );
}

export default InfoRow;
