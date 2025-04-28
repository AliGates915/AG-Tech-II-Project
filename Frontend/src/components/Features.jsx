import React from "react";
import Button from "../components/Button";

const Features = () => {
  const uploads = [
    {
      id: 1,
      title: "Universities & Affiliated Collage Past Papers",
      image: "./Images/paper.png",
    },
    {
      id: 2,
      title: "Universities & Affiliated Collage Recommended Books",
      image: "./Images/books.png",
    },
    {
      id: 3,
      title: "Tech Guidance in Web, AI, ML, and Web-3 Hunt Job in IT",
      image: "./Images/it.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold  mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className=" dark:bg-slate-900 dark:text-white bg-gray-100 p-4 shadow-lg shadow-gray-400 rounded-xl relative flex flex-col items-center text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={upload.image}
              alt={upload.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <h3 className="text-xl font-bold my-4 ">{upload.title}</h3>
          
            {/* Small & Centered Button */}
            <Button className=" mx-5 bg-blue-600 text-white px-6 py-3 text-sm rounded-full shadow-md     hover:bg-blue-700 hover:font-bold transition-all duration-200 ease-in-out transform hover:scale-105   hover:translate-y-1 cursor-pointer">
              EXPLORE ME
            </Button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Features;
