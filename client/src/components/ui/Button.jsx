import { cn } from "../../utils/cn";

function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white",

    outline:
      "border border-slate-300 hover:bg-slate-100",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={cn(
        "rounded-lg px-6 py-3 font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;