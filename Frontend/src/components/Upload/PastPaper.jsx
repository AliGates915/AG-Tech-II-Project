import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClockLoader } from "react-spinners";

import axios from "axios";

function Paper() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [subject, setSubject] = useState("");
    const [code, setCode] = useState("");
    const [year, setYear] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [paperUnsolved, setPaperUnsolved] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file =>
            file.type === "application/pdf" || file.type.startsWith("image/")
        );

       
        if (validFiles.length !== files.length) {
            toast.warn("Some files were skipped. Only PDF or image files allowed.");
        }

        setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    };

    const handleFileDelete = (fileToDelete) => {
        setSelectedFiles(prevFiles =>
            prevFiles.filter(file => file !== fileToDelete)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!subject.trim() || !code.trim() || !year.trim() || !universityName.trim() || !paperUnsolved.trim()) {
          toast.error("Please fill all required fields (*)");
          return;
        }
      
        if (!selectedFiles || selectedFiles.length === 0) {
          toast.error("Please upload paper(s) (PDF or image).");
          return;
        }
      
        if (isNaN(year)) {
          toast.error("Year must be numbers only!");
          return;
        }
      
        setIsUploading(true);
        let thumbnail;
      
        try {
          const uploadedFileUrls = [];
      
          for (const file of selectedFiles) {
            if (file.size > 100 * 1024 * 1024) {
              toast.error("File too large! Must be under 100MB.");
              setIsUploading(false);
              return;
            }
      
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            
      
            const uploadUrl = "https://api.cloudinary.com/v1_1/daexycwc7/auto/upload";
            
            const uploadRes = await axios.post(uploadUrl, data);
            console.log("Upload response:", uploadRes.data);
            
            const fileUrl = uploadRes.data.secure_url;
            uploadedFileUrls.push(fileUrl);
      
            // Optional: create a preview thumbnail (for image/pdf first page)
            const fileId = fileUrl.split('/upload/')[1].replace(/\.(pdf|mp4|jpg|png)$/, '');
            thumbnail = `https://res.cloudinary.com/daexycwc7/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/${fileId}.jpg`;
          }
      
          const payload = {
            subjectName: subject,
            courseCode: code,
            year,
            paperUnsolved,
            universityName,
            paperUpload: uploadedFileUrls,
            paperThumbnail: thumbnail,
          };
      
          await axios.post("https://ag-tech-ii-project-x1sa.vercel.app/api/pastPapers", payload);
      
          toast.success("Papers uploaded successfully!");
        //   setSubject("");
        //   setCode("");
        //   setYear("");
          setSelectedFiles([]);
        } catch (err) {
          console.error("Upload error:", err);
          toast.error("Error uploading papers");
        } finally {
          setIsUploading(false);
        }
      };
      
      
      
      
      

    return (
        <>
        {isUploading && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
                        <div className="text-center">
                        <ClockLoader color="#328deb" size={100} speedMultiplier={1} />
                        <p className="mt-4 text-blue-600 text-lg font-semibold">
                            
                        </p>
                        </div>
                    </div>
                )}
        
            <ToastContainer position="top-right" />

            <div className="flex justify-center">
                <h1 className="text-4xl font-medium text-[#2563EB]">Upload Past Paper</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Subject Name *</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Course Code *</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Year *</label>
                        <input
                            type="number"
                            className="w-full border rounded px-3 py-2"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Paper Solved/Unsolved *</label>
                    <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        value={paperUnsolved}
                        onChange={(e) => setPaperUnsolved(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">University Name *</label>
                    <input 
                        type="text" 
                        className="w-full border rounded px-3 py-2" 
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                    />
                </div>

               
                
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Paper Upload *</label>
                    <label className=" w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        <span>Past Paper Upload (PNG, JPG, PDF)</span>
                        <input
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={handleFileSelect}
                            multiple
                        />
                    </label>
                </div>

                {selectedFiles.length > 0 && (
                    <div className="space-y-3 mb-6">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                            >
                                <div className="flex items-center">
                                    <svg className="cursor-pointer w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                        <path d="M3 8a2 2 0 012-2v10h2a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                    </svg>
                                    <span className="ml-2">{file.name}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleFileDelete(file)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <svg className="cursor-pointer w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-center">
                    <button type="submit" className="cursor-pointer px-6 py-2 rounded-full text-white bg-[#2563EB] hover:bg-blue-800">
                    {isUploading ? "Uploading..." : "Upload Papers"}
                    </button>
                </div>
            </form>
        </>
    );
}

export default Paper;
