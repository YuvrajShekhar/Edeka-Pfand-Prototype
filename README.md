# EDEKA Pfand Barcode Generator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A React web app that generates **scannable EDEKA bottle deposit (Pfand) barcodes** for store returns.

## 📌 Features
✔ **Store Selection** (EDEKA 1 or EDEKA 2)  
✔ **Receipt Number Input** (1-999)  
✔ **Date Picker** (auto-encoded in barcode)  
✔ **Refund Amount Dropdown** (€0.25 to €99.75 in €0.25 increments)  
✔ **Scannable Barcode** (CODE128 format)  
✔ **Copy to Clipboard**


## 🚀 Quick Start

**Clone the repo**

```bash
git clone https://github.com/yourusername/edeka-pfand-generator.git
cd edeka-pfand-generator
```

**Install dependencies**

```bash
npm install
```

**Run the app**

```bash
npm run dev
```

**Open in browser**
→ http://localhost:5173

## 🔧 How It Works

The barcode encodes:
1.Store prefix (98409456 or 98409452)
2.Receipt number (zero-padded to 3 digits)
3.Date (as day-of-year + 20 prefix)
4.Refund amount (encoded differently for ≤€1.00 and >€1.00)
5.Checksum (last 2 digits of receipt_number × 3)

**Example:**
98409456 (Store 1) + 062 (Receipt) + 2087 (March 28) + 1005 (€1.00) + 86 (Checksum)
→ 984094560622087100586

## 📂 Project Structure

src/
├── assets/
│   ├── Edeka_Pfand_Barcode_Algo_Breakdown_v1.01.pdf  # Documentation for the Algorithm version 1.01
│   ├── Edeka_Pfand_Barcode_Algo_Breakdown_v1.01.pdf  # Documentation for the Algorithm version 1.00
├── components/
│   ├── BarcodeDisplay.jsx  # Shows scannable barcode
│   ├── DateInput.jsx       # Date picker
│   ├── ReceiptInput.jsx    # Receipt number input
│   ├── RefundDropdown.jsx  # Refund amount selector
│   └── StoreSelector.jsx   # EDEKA store switcher
├── App.jsx                 # Main component
└── main.jsx                # React entry point

## 📜 Algorithm Documentation
See /src/assets/Edeka_Pfand_Barcode_Algo_Breakdown_v1.01.pdf for detailed barcode generation rules.

## 🎯 Usage Example

1. Select store (EDEKA 1 or 2)
2. Enter receipt number (e.g., 62)
3. Pick date (e.g., March 28, 2025)
4. Select refund amount (e.g., €1.00)
5. Click "Generate Barcode"
6. Scan the barcode at an EDEKA return machine!"