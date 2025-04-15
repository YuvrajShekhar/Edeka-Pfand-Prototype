export default function RefundDropdown({ refundAmount, setRefundAmount, options }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Refund Amount (€)
        </label>
        <select
          value={refundAmount}
          onChange={(e) => setRefundAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {options.map((amount) => (
            <option key={amount} value={amount}>
              {amount} €
            </option>
          ))}
        </select>
      </div>
    );
  }