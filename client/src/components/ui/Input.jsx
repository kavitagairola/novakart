import { cn } from "../../utils/cn";

function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
}

export default Input;