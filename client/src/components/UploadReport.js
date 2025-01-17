import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadReport = ({ onReportData }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [diagnosisReport, setDiagnosisReport] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log('Upload button clicked'); // Check if function is called

    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data); // Check server response
      onReportData(response.data);
      setDiagnosisReport(response.data); // Ensure this is the correct path
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    }
  };

  useEffect(() => {
    if (diagnosisReport) {
      console.log('Diagnosis Report:', diagnosisReport); // Check state update
    }
  }, [diagnosisReport]);

  return (
    <div className='rounded-xl' style={{ display: 'flex',alignItems:'center', justifyContent: 'center', marginTop: '3rem', width:'300px',
      height: '200px',marginLeft:'38%',marginTop:'15%',backgroundColor: 'rgba(220, 220, 220, 0.76)' }}>
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          id="file-upload"
          style={{ display: 'none' }} // Hide the default file input
        />
        <label
          htmlFor="file-upload"
          className="custom-file-upload text-dark font-medium rounded-lg text-s px-3 py-2 text-center me-2 mb-2"
        >
          Select File
        </label>
        <div>
          <button
            type="button"
            className="mt-2 mx-1 text-light bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-s px-3 py-2 text-center me-2 mb-2"
            onClick={handleUpload}
          >
            Upload Report
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadReport;
