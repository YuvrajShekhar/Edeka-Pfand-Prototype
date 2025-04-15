import BarcodeGenerator from './components/BarcodeGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 flex-grow">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
  <div className="flex items-center justify-center gap-2">
    <img src="https://www.edeka.de/edeka-ui-assets/images/logo-hdpi.png" alt="EDEKA Logo" width="50" />
    <span>EDEKA Pfand Barcode Generator</span>
  </div>
</h1>

        <BarcodeGenerator />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;