import { useState } from 'react';
import DateInput from './DateInput';
import ReceiptInput from './ReceiptInput';
import RefundDropdown from './RefundDropdown';
import BarcodeDisplay from './BarcodeDisplay';
import StoreSelector from './StoreSelector';

export default function BarcodeGenerator() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [receiptNumber, setReceiptNumber] = useState('');
  const [refundAmount, setRefundAmount] = useState('0.25');
  const [barcode, setBarcode] = useState('');
  const [storePrefix, setStorePrefix] = useState('98409456'); // Default to EDEKA 1

  // Generate refund options from 0.25 to 99.75 in 0.25 increments
  const refundOptions = Array.from({ length: 399 }, (_, i) => {
    const value = (i + 1) * 0.25;
    return value.toFixed(2);
  });

  const getDayOfYear = (dateStr) => {
    const date = new Date(dateStr);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const generateBarcode = () => {
    if (!date) {
      alert('Please select a date');
      return;
    }

    if (!receiptNumber || receiptNumber < 1 || receiptNumber > 999) {
      alert('Please enter a valid receipt number between 1 and 999');
      return;
    }

    // Calculate components
    const dayOfYear = getDayOfYear(date);
    const dateCode = `20${dayOfYear.toString().padStart(3, '0')}`;
    const paddedReceiptNumber = receiptNumber.toString().padStart(3, '0');
    const cents = Math.round(parseFloat(refundAmount) * 100);

    // Apply different encoding for amounts ≤1.00 and >1.00
    let refundCode;
    if (parseFloat(refundAmount) <= 1.00) {
      refundCode = cents.toString().padStart(2, '0') + '05';
    } else {
      refundCode = Math.round(cents * 7.777).toString().padStart(4, '0');
    }

    // Generate checksum (last 2 digits of receipt number × 3)
    const checksum = (parseInt(paddedReceiptNumber.slice(-2)) * 3);
    const paddedChecksum = checksum.toString().padStart(2, '0');

    // Construct barcode with selected store prefix
    const generatedBarcode = `${storePrefix}${paddedReceiptNumber}${dateCode}${refundCode}${paddedChecksum}`;
    setBarcode(generatedBarcode);
  };

  return (
    <div className="space-y-4">
      <StoreSelector store={storePrefix} setStore={setStorePrefix} />
      <DateInput date={date} setDate={setDate} />
      <ReceiptInput receiptNumber={receiptNumber} setReceiptNumber={setReceiptNumber} />
      <RefundDropdown 
        refundAmount={refundAmount} 
        setRefundAmount={setRefundAmount}
        options={refundOptions}
      />
      
      <button
        onClick={generateBarcode}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-200"
      >
        Generate Barcode
      </button>

      {barcode && <BarcodeDisplay barcode={barcode} />}
    </div>
  );
}