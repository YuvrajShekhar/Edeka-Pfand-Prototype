// Footer.jsx
import React from 'react';
import pdf from "../assets/Edeka_Pfand_Barcode_Algo_Breakdown.pdf";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">
        Need documentation?{' '}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Click here to open PDF
        </a>
      </p>
    </footer>
  );
};

export default Footer;
