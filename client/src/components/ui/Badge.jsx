function Badge({ children }) {
  return (
    <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
      {children}
    </span>
  );
}

export default Badge;