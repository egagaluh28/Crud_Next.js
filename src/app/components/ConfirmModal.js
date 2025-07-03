export default function ConfirmModal({
  show,
  onCancel,
  onConfirm,
  title,
  message,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center border border-indigo-100">
        <div className="mb-4">
          <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
            <svg
              className="w-7 h-7 text-indigo-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-1">
            {title || "Konfirmasi"}
          </h4>
          <p className="text-gray-500 text-sm">
            {message || "Apakah Anda yakin ingin melanjutkan aksi ini?"}
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition-all duration-150">
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-150">
            Iya
          </button>
        </div>
      </div>
    </div>
  );
}
