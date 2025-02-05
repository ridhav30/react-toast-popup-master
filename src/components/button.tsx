import { button } from "./types";

export const Button = ({ label }: button) => {
  return (
    <div>
      <button className="bg-red-500 p-2 rounded">{label}</button>
    </div>
  );
};
