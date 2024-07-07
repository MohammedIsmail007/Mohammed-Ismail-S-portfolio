// CustomAlert.js
import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <>
      <div className="fixed  inset-0 flex items-center justify-center bg-white bg-opacity-10 z-50 mt-28 backdrop-blur-3xl">
        <div className="backdrop-blur-3xl customAlert  p-6 rounded-lg shadow-lg text-center">
          <p className="mb-4 text-3xl font-serif backdrop-blur-lg">{message}</p>
          <button
            onClick={onClose}
            className="px-4 py-2 border text-white rounded bg-blue-700 font-serif font-bold"
          >
            LET'S GO
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomAlert;
