import React from "react"
import Button from "./Button";

const UploadCards = ({ upload }) => {

  const thumbnail = upload.bookThumbnail || "../assets/noimg.jpeg";
  const downloadUrl = Array.isArray(upload.bookUpload)
    ? upload.bookUpload[0]
    : upload.bookUpload;

    console.log(downloadUrl)
  return (
    <div className="w-full max-w-sm h-[380px] bg-gray-100 p-4 shadow-lg shadow-gray-400 rounded-xl flex flex-col justify-between text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer">

      {/* Image */}
      <img
        src={thumbnail}
        alt={upload.bookName}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Text Content */}
      <div className="mt-3 flex flex-col items-center flex-grow gap-2 lg:gap-1">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{upload.bookName}</h3>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{upload.authorName}</p>
      </div>

      {/* Button */}
      <a href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer" className="btn mx-auto mt-4 mb-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full shadow-md hover:bg-amber-500 hover:font-bold transition-all duration-200 ease-in-out transform hover:scale-105 hover:translate-y-1">
        DOWNLOAD
      </a>
    </div>
  );
};


export default UploadCards;