export default function ConfirmDeleteModal({
  show,
  name,
  onConfirm,
  onCancel,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center border border-indigo-100">
        <div className="mb-4">
          <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
            <svg
              className="w-7 h-7 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-1">
            Hapus Peserta?
          </h4>
          <p className="text-gray-500 text-sm">
            Apakah Anda yakin ingin menghapus peserta{" "}
            <span className="font-semibold">{name}</span>?
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all duration-150">
            Iya
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition-all duration-150">
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
