export default function StoreSelector({ store, setStore }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">EDEKA Store</label>
        <select
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="98409456">EDEKA 1 (Dörpfeldstraße 46)</option>
          <option value="98409452">EDEKA 2 (Schnellerstraße 131)</option>
        </select>
      </div>
    );
  }