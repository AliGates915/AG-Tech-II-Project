import React from "react";
import Button from "./Button";
import './styles.css'

const RecentUploads = () => {
  const uploads = [
    {
      id: 1,
      year: "2018",
      title: "IT-201 Object Oriented Programming Past Paper 2018",
      university: "Punjab University",
      image: "./Images/2018.PNG",
    },
    {
      id: 2,
      year: "2019",
      title: "IT-201 Object Oriented Programming Past Paper 2019",
      university: "University of Management & Technology",
      image: "./Images/2020.PNG",
    },
    {
      id: 3,
      year: "2021",
      title: "IT-201 Object Oriented Programming Past Paper 2021",
      university: "Punjab University",
      image: "./Images/bs 2021.PNG",
    },
    {
      id: 4,
      title: "Discrete Mathematics and Its Applications",
      university: "Kenneth Rosen",
      image: "./Images/Discrete Mathematics.jpg",
    },
    {
      id: 5,
      title: "Database Past Paper and Guess Material 3rd Semester",
      university: "PU & Other Universities",
      image: "./Images/Guess Paper.png",
    },
    {
      id: 6,
      title: "Programming Fundamentals - C++",
      university: "D.S Malik",
      image: "./Images/DS Malik C++.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 dark:bg-slate-900">
      <h2 className="text-2xl font-bold  mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="dark:bg-gray-900 dark:text-white bg-gray-100 p-4 shadow-lg shadow-gray-400 rounded-xl relative flex flex-col items-center text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={upload.image}
              alt={upload.title}
              className="w-full h-48 object-cover rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            
            <h3 className="text-lg font-semibold my-2">{upload.title}</h3>
            <p className="text-sm text-gray-600 mb-2 dark:text-slate-400">{upload.university}</p>
            {/* Small & Centered Button */}
            <Button className="btn mx-5 bg-blue-600 text-white px-6 py-3 text-sm rounded-full shadow-md     hover:bg-amber-500 hover:font-bold transition-all duration-200 ease-in-out transform hover:scale-105   hover:translate-y-1 cursor-pointer">
              DOWNLOAD
            </Button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentUploads;
