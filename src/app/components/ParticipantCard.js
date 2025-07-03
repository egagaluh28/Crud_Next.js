// src/app/components/ParticipantCard.js
"use client"; // Penting karena menggunakan useState dan useContext

import { useContext, useState } from "react";
import EventContext from "../context/EventContext"; // Pastikan path benar

export default function ParticipantCard({ participant }) {
  const { removeParticipant, editParticipant } = useContext(EventContext);
  const [isEdit, setIsEdit] = useState(false);
  const [editForm, setEditForm] = useState({ ...participant });
  const [showConfirm, setShowConfirm] = useState(false); // State untuk modal konfirmasi

  // Handle perubahan pada input form edit
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit form edit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Menggunakan participant.id untuk mengidentifikasi peserta yang diedit
    editParticipant(participant.id, editForm);
    setIsEdit(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-indigo-100 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Accent */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 rounded-full opacity-40 blur-2xl pointer-events-none"></div>

      {/* Tombol aksi Edit dan Hapus */}
      <div className="absolute top-5 right-5 flex space-x-2 z-10">
        <button
          onClick={() => setIsEdit(true)}
          className="p-2 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          aria-label="Edit participant"
          title="Edit Participant">
          {/* Ikon Edit */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="p-2 rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
          aria-label="Remove participant"
          title="Remove Participant">
          {/* Ikon Hapus */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.927a2.25 2.25 0 0 1-2.244-2.077L4.74 5.79a48.109 48.109 0 0 1-.304-.034M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25V5.79M6 5.25V19.25a2.25 2.25 0 002.25 2.25h8.5a2.25 2.25 0 002.25-2.25V5.25M9 5.25h6"
            />
          </svg>
        </button>
      </div>

      {/* Modal Konfirmasi Hapus */}
      {showConfirm && (
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
                <span className="font-semibold">{participant.name}</span>?
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  removeParticipant(participant.id);
                  setShowConfirm(false);
                }}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all duration-150">
                Iya
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition-all duration-150">
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tampilan normal informasi peserta */}
      {!isEdit ? (
        <>
          <div className="flex-grow">
            <h3 className="text-2xl font-extrabold text-indigo-800 mb-2 leading-snug pr-16">
              {participant.name}
            </h3>
            <p className="text-md text-gray-700 break-words mb-1">
              <span className="font-semibold text-gray-500 mr-2">Email:</span>{" "}
              {participant.email}
            </p>
            <p className="text-md text-gray-700 mb-2">
              <span className="font-semibold text-gray-500 mr-2">Telepon:</span>{" "}
              {participant.phone}
            </p>

            {/* Badges untuk Sesi dan Kota */}
            <div className="flex items-center flex-wrap gap-3 mt-3">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-indigo-800 bg-gradient-to-r from-indigo-100 to-white rounded-full shadow-sm">
                {/* Ikon Jam untuk Sesi */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 mr-2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {participant.session}
              </span>
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-purple-800 bg-gradient-to-r from-purple-100 to-white rounded-full shadow-sm">
                {/* Ikon Lokasi untuk Kota */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 mr-2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6H18"
                  />
                </svg>
                {participant.city}
              </span>
            </div>

            {/* Bagian alasan bergabung, dengan styling kutipan */}
            {participant.reason && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  <span className="text-indigo-400 text-lg font-bold mr-1">
                    &ldquo;
                  </span>
                  {participant.reason}
                  <span className="text-indigo-400 text-lg font-bold ml-1">
                    &rdquo;
                  </span>
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        // Form edit peserta
        <form onSubmit={handleEditSubmit} className="flex flex-col gap-4 mt-1">
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 text-base"
            name="name"
            value={editForm.name}
            onChange={handleEditChange}
            placeholder="Nama Lengkap"
            required
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 text-base"
            name="email"
            type="email"
            value={editForm.email}
            onChange={handleEditChange}
            placeholder="Email"
            required
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 text-base"
            name="phone"
            type="tel"
            value={editForm.phone}
            onChange={handleEditChange}
            placeholder="Nomor Telepon"
            required
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 text-base"
            name="city"
            value={editForm.city}
            onChange={handleEditChange}
            placeholder="Kota Asal"
            required
          />
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 bg-white placeholder-gray-400 text-base"
            name="session"
            value={editForm.session}
            onChange={handleEditChange}>
            <option value="" disabled>
              Pilih Sesi Workshop
            </option>
            <option value="Pagi">Sesi Pagi</option>
            <option value="Siang">Sesi Siang</option>
          </select>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800 placeholder-gray-400 resize-y"
            name="reason"
            value={editForm.reason}
            onChange={handleEditChange}
            placeholder="Alasan bergabung (opsional)"
            rows={3}
          />
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => setIsEdit(false)}
              className="bg-gray-200 text-gray-800 font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              Batal
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
