import { useState } from "react";
import { Link } from "react-router-dom";

export const QrGenerator = () => {
   const [img, setImage] = useState("");
   const [qrData, setQrData] = useState("");
   const [isGenerating, setIsGenerating] = useState(false);
   const [isDownloading, setIsDownloading] = useState(false);

   const generateQR = async () => {
      setIsGenerating(true);
      if (!qrData) {
         alert("Enter the text or link")
         return;
      }
      try {
         const url = `https://api.qrserver.com/v1/create-qr-code/?size=${200}x${200}&data=${encodeURIComponent(
            qrData
         )}`;
         setImage(url);
      } catch (error) {
         console.error(error);
      } finally {
         setIsGenerating(false);
      }
   };

   const downloadQR = async () => {
      setIsDownloading(true)
      try {
         if (!img) return;
         const response = await fetch(img);
         const blob = await response.blob();

         const link = document.createElement("a");
         link.href = URL.createObjectURL(blob);
         link.download = "qr-code.png";
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      } catch (error) {
         console.log(error)
      } finally {
         setIsDownloading(false)
      }
   };

   const reset = () => {
      setQrData("")
      setImage("")
   };

   return (
      <div className="min-h-screen bg-linear-to-tr from-indigo-300 to-emerald-300 flex items-center justify-center p-4 font-inter">
         <div className="w-full md:max-w-3xl flex flex-col gap-y-6  bg-[#f6f6f6] rounded-2xl shadow-lg p-6 ">
            <h1 className="md:text-3xl text-xl font-bold text-center text-indigo-700">
               QR Code Generator
            </h1>
            <p className="text-sm text-indigo-500 text-center">
               Enter any text or URL and click “Generate” to create your QR code.
            </p>

            {isGenerating && (
               <div className="w-50 h-50 shadow-slate-200 shadow-2xl rounded-xl">
                  <i className="pi pi-spin pi-cog text-indigo-800" style={{ fontSize: '2rem' }}></i>
               </div>
            )}

            {img ? (
               <div className="flex justify-center">
                  <img
                     src={img}
                     alt="Generated QR"
                     className="w-50 h-50 shadow-slate-200 shadow-2xl rounded-xl"
                  />
               </div>) :
               (<div className="flex justify-center">
                  <img
                     src={`/11136.jpg`}
                     alt="Generated QR"
                     className="w-50 h-50 shadow-slate-200  shadow-2xl rounded-xl"
                  />
               </div>
               )}

            <div className="flex flex-col gap-3 md:w-xl mx-auto">
               <div>
                  <label className="block text-sm font-medium text-indigo-600 mb-1">
                     Data for QR
                  </label>
                  <input
                     type="text"
                     placeholder="Enter text or URL"
                     value={qrData}
                     onChange={(e) => setQrData(e.target.value)}
                     className="p-3 pr-12 bg-white border-2 border-indigo-500 rounded-md w-full text-indigo-500 placeholder-indigo-700 font-mono focus:outline-none focus:shadow-lg focus:shadow-indigo-500/30"
                  />
               </div>

            </div>

            <div className="flex md:flex-row flex-col gap-3 max-w-xl mx-auto">
               <button
                  onClick={generateQR}
                  disabled={isGenerating || !qrData}
                  className="px-10 flex-1 flex items-center gap-1 cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
               >
                  {isGenerating && <i className="pi pi-spin pi-spinner"></i>}
                  Generate
               </button>

               <button
                  onClick={downloadQR}
                  disabled={!img || isDownloading}
                  className="px-10 flex-1 flex items-center gap-1 cursor-pointer bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
               >
                  {isDownloading && <i className="pi pi-spin pi-spinner"></i>}
                  Download
               </button>

               <button
                  onClick={reset}
                  className="px-10 flex-1 cursor-pointer bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 disabled:opacity-50"
               >
                  Reset
               </button>
               <Link
                  to="/"
                  className="px-10 cursor-pointer flex justify-center bg-sky-500 text-white py-2 rounded-lg font-medium hover:bg-sky-700 disabled:opacity-50"
               >
                  Home
               </Link>
            </div>

            <p className="text-center text-xs text-gray-400">
               Developed by <span className="text-blue-600 font-medium">Visva V</span>
            </p>
         </div>
      </div>
   );
};
