export default function ReceiptInput({ receiptNumber, setReceiptNumber }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Receipt Number (1-999)
        </label>
        <input
          type="number"
          min="1"
          max="999"
          value={receiptNumber}
          onChange={(e) => setReceiptNumber(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter receipt number"
        />
      </div>
    );
  }