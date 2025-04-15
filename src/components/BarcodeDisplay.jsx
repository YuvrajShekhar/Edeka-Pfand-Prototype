import { useState } from 'react';
import Barcode from 'react-barcode';

export default function BarcodeDisplay({ barcode }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(barcode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Generated Barcode</h2>
      
      {/* Barcode Display */}
      <div className="flex justify-center mb-4 p-4 bg-white rounded">
        <Barcode 
          value={barcode}
          format="CODE128"
          width={2}
          height={100}
          displayValue={false}
        />
      </div>
      
      {/* Text Display */}
      <div className="flex items-center justify-between">
        <p className="font-mono text-gray-800 overflow-x-auto py-2">{barcode}</p>
        <button
          onClick={copyToClipboard}
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-md text-sm transition duration-150 ease-in-out"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}