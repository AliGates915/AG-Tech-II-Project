import React, { useEffect, useState } from "react";
import Button from "./Button";
import './styles.css'
import UploadCards from "./UploadCards";

const RecentUploads = () => {

  const [recentBooks,setRecentBooks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/books/recent?limit=8').then(res=>res.json()).then(data=>setRecentBooks(data.data)).catch(err=>console.error(err));
  },[])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {recentBooks.length === 0 ? (
  <p>No recent uploads found.</p>
) : (
  recentBooks.map((upload) => (
    <UploadCards key={upload._id} upload={upload} />
  ))
)}

      </div>

    </div>
  );
};

export default RecentUploads;
