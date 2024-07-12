// CustomAlert.js
import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <>
      <div className="fixed  inset-0 flex items-center justify-center z-50 mt-28 ">
        <div className=" customAlert  p-6 rounded-lg shadow-lg text-center">
          <p className="mb-4 text-3xl font-serif ">{message}</p>
          <button
            onClick={onClose}
            className="px-4 py-2 border text-white rounded bg-blue-700  font-serif font-semibold"
          >
            <span className="animate-pulse"> LET'S GO</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomAlert;
