import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import './styles.css'
import UploadCards from "./UploadCards";
import axios from 'axios';

const RecentUploads = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPapers = async () => {
      try {
        const response = await axios.get("https://ag-tech-ii-project-backend.up.railway.app/api/pastPapers/recent?limit=6");
        const recent = response?.data?.data || [];
        console.log("Recent papers fetched:", response.data);
        setUploads(recent);

      } catch (error) {
        console.error("Failed to fetch recent papers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPapers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Uploads</h2>
      {loading ? (
        <p>Loading...</p>
      ) : uploads.length === 0 ? (
        <p>No uploads found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {uploads.map((upload) => (
            <UploadCards key={upload._id} upload={upload} />
          ))}
        </div>
      )}
      </div>
  );
};

export default RecentUploads;
