export default function Toast({ message, type = "info", onClose }) {
  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-xl flex items-center gap-3
        ${
          type === "success"
            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
            : "bg-gradient-to-r from-red-400 to-pink-500 text-white"
        }
        animate-fade-in`}
      style={{ minWidth: 280 }}>
      <span className="text-2xl">{type === "success" ? "✅" : "⚠️"}</span>
      <span className="font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white/80 hover:text-white text-lg font-bold"
        aria-label="Tutup">
        ×
      </button>
    </div>
  );
}
