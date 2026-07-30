import { cn } from "../../utils/cn";

function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-xl hover:-translate-y-1",

    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:-translate-y-1",

    danger:
      "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-xl hover:-translate-y-1",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-xl font-semibold transition-all duration-300 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;