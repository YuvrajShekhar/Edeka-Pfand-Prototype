export default function Footer() {
    const openCopyrightPdf = () => {
      window.open('../assets/copyright.pdf', '_blank');
    };
  
    return (
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} EDEKA Pfand Generator. 
          <span 
            onClick={openCopyrightPdf}
            className="text-blue-600 hover:text-blue-800 cursor-pointer ml-1"
          >
            [Copyright Notice]
          </span>
        </p>
      </footer>
    );
  }