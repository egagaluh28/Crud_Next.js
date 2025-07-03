// src/app/context/EventContext.js
"use client"; // Penting untuk Context API di Next.js App Router

import { createContext, useState, useEffect } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  // Muat data dari localStorage saat komponen mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("participants");
      if (stored) {
        setParticipants(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Gagal memuat peserta dari localStorage:", error);
      // Opsional: bersihkan localStorage jika datanya rusak
      // localStorage.removeItem("participants");
    }
  }, []);

  // Simpan data ke localStorage setiap kali 'participants' berubah
  useEffect(() => {
    try {
      localStorage.setItem("participants", JSON.stringify(participants));
    } catch (error) {
      console.error("Gagal menyimpan peserta ke localStorage:", error);
    }
  }, [participants]);

  // Fungsi untuk menambahkan peserta baru dengan ID unik
  const addParticipant = (newParticipant) => {
    // Memberikan ID unik menggunakan Date.now() untuk kesederhanaan.
    // Untuk aplikasi yang lebih besar, pertimbangkan pustaka seperti 'uuid'.
    setParticipants((prev) => [...prev, { ...newParticipant, id: Date.now() }]);
  };

  // Fungsi untuk menghapus peserta berdasarkan ID
  const removeParticipant = (idToRemove) => {
    setParticipants((prev) =>
      prev.filter((participant) => participant.id !== idToRemove)
    );
  };

  // Fungsi untuk mengedit peserta berdasarkan ID
  const editParticipant = (idToEdit, updatedData) => {
    setParticipants((prev) =>
      prev.map((participant) =>
        participant.id === idToEdit
          ? { ...participant, ...updatedData }
          : participant
      )
    );
  };

  return (
    <EventContext.Provider
      value={{
        participants,
        addParticipant,
        removeParticipant,
        editParticipant,
      }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
