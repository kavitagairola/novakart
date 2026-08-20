import { useEffect } from "react";
import { X } from "lucide-react";

function Drawer({
  open,
  onClose,
  title,
  width = "420px",
  children,
}) {
    useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [open, onClose]);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[999] bg-black/40 transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`} 
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[1000] h-screen bg-white shadow-2xl transition-transform duration-300 flex flex-col`}
        style={{
          width,
          transform: open
            ? "translateX(0)"
            : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

      <div className="flex-1 overflow-y-auto p-6">
  {children}
</div>

      </div>
    </>
  );
}

export default Drawer;