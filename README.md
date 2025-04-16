# EDEKA Pfand Barcode Generator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A React web app that generates **scannable EDEKA bottle deposit (Pfand) barcodes** for store returns.

## 📌 Features
✔ **Store Selection** (EDEKA 1 or EDEKA 2)  
✔ **Receipt Number Input** (1-999)  
✔ **Date Picker** (auto-encoded in barcode)  
✔ **Refund Amount Dropdown** (€0.25 to €99.75 in €0.25 increments)  
✔ **Scannable Barcode** (CODE128 format)  
✔ **Copy to Clipboard**


🚀 Quick Start

**Clone the repo**

```bash
git clone https://github.com/yourusername/edeka-pfand-generator.git
cd edeka-pfand-generator

Install dependencies

bash
Copy
npm install
Run the app

bash
Copy
npm run dev
Open in browser
→ http://localhost:5173

🔧 How It Works
The barcode encodes:

Store prefix (98409456 or 98409452)

Receipt number (zero-padded to 3 digits)

Date (as day-of-year + 20 prefix)

Refund amount (encoded differently for ≤€1.00 and >€1.00)

Checksum (last 2 digits of receipt_number × 3)

Example:
98409456 (Store 1) + 062 (Receipt) + 2087 (March 28) + 1005 (€1.00) + 86 (Checksum)
→ 984094560622087100586

📂 Project Structure
Copy
src/
├── components/
│   ├── BarcodeDisplay.jsx  # Shows scannable barcode
│   ├── DateInput.jsx       # Date picker
│   ├── ReceiptInput.jsx    # Receipt number input
│   ├── RefundDropdown.jsx  # Refund amount selector
│   └── StoreSelector.jsx   # EDEKA store switcher
├── App.jsx                 # Main component
└── main.jsx                # React entry point
📜 Algorithm Documentation
See ALGORITHM.md for detailed barcode generation rules.

📄 License
MIT © [Your Name]

💡 Tip: Scan the generated barcode at EDEKA bottle return machines!

<div align="center"> <sub>Built with React + Vite + Tailwind CSS</sub> </div>
🎯 Usage Example
Select store (EDEKA 1 or 2)

Enter receipt number (e.g., 62)

Pick date (e.g., March 28, 2025)

Select refund amount (e.g., €1.00)

Click "Generate Barcode"

Scan the barcode at an EDEKA return machine!"