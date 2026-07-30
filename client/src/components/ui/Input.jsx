import { cn } from "../../utils/cn";

function Input({
  label,
  error,
  className,
  ...props
}) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      {/* Input */}
      <input
        className={cn(
          "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 transition-all duration-300 outline-none",
          "placeholder:text-gray-400",
          "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-100",
          className
        )}
        {...props}
      />

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;