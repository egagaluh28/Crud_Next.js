// src/app/daftar/page.js
"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import EventContext from "../context/EventContext";

// Toast component
function Toast({ message, type = "info", onClose }) {
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

export default function RegisterPage() {
  const { addParticipant } = useContext(EventContext);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    session: "",
    reason: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
  });
  const [showConfirm, setShowConfirm] = useState(false);

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "info" }),
      3000
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Tampilkan modal konfirmasi saat tombol submit diklik
  const handleShowConfirm = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  // Proses submit setelah klik "Iya" di modal
  const handleConfirmSubmit = () => {
    // Validasi
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.city ||
      !form.session
    ) {
      showToast(
        "Oops! Sepertinya ada beberapa informasi yang belum lengkap. Mohon lengkapi semua field yang diperlukan ya.",
        "error"
      );
      setShowConfirm(false);
      return;
    }
    addParticipant(form);
    showToast(
      "Selamat! Pendaftaran Anda berhasil. Kami sangat antusias menyambut Anda!",
      "success"
    );
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      session: "",
      reason: "",
    });
    setShowConfirm(false);
    setTimeout(() => router.push("/"), 1200);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type === "error" ? "error" : "success"}
          onClose={() => setToast({ show: false, message: "", type: "info" })}
        />
      )}

      {/* Modal Konfirmasi */}
      {showConfirm && (
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
                Konfirmasi Pendaftaran
              </h4>
              <p className="text-gray-500 text-sm">
                Apakah Anda yakin ingin mendaftar dengan data yang sudah diisi?
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition-all duration-150">
                Batal
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-150">
                Iya
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-indigo-100 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-3 text-center tracking-tight drop-shadow-md">
          Daftar Sekarang untuk Workshop!
        </h2>
        <p className="text-gray-600 mb-10 text-center text-lg">
          Isi formulir singkat di bawah ini dan amankan tempat Anda di workshop
          kami.
        </p>
        <form onSubmit={handleShowConfirm} className="space-y-6 text-gray-800">
          <InputField
            label="Nama Lengkap"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Misal: John Doe"
            required
          />
          <InputField
            label="Alamat Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Misal: emailanda@example.com"
            required
          />
          <InputField
            label="Nomor Telepon"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Misal: 0812-3456-7890"
            required
          />
          <InputField
            label="Kota Domisili"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Misal: Jakarta"
            required
          />

          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-2">
              Pilih Sesi Workshop
            </label>
            <div className="relative">
              <select
                name="session"
                value={form.session}
                onChange={handleChange}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 appearance-none bg-white"
                required>
                <option value="" disabled>
                  -- Pilih Sesi --
                </option>
                <option value="Pagi">Sesi Pagi (09:00 - 12:00 WIB)</option>
                <option value="Siang">Sesi Siang (14:00 - 17:00 WIB)</option>
              </select>
              {/* Custom arrow untuk select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-indigo-700 mb-2">
              Alasan Mengikuti Workshop (Opsional)
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4" // Menambah tinggi default textarea
              value={form.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 resize-y"
              placeholder="Ceritakan mengapa Anda tertarik dengan workshop ini..."></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-4 px-6 rounded-xl font-bold text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-2">
            Daftar Sekarang!
          </button>
        </form>
      </div>
    </div>
  );
}

// Komponen InputField yang dipercantik
function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-indigo-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
