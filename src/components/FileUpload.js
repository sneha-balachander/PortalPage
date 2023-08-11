import React, { useState } from "react";
import "./FileUpload.css";

function FileUpload() {
  const [ApiKey, setApiKey] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState([]);
  const [extractedData, setExtractedData] = useState(false);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = [...e.dataTransfer.files];
    setFile(droppedFiles);
  };

  const handleFileChange = (e) => {};
  const url = "../asset/data_extraction.jpg";
  return (
    <div>
      <div className="row">
        <div className="col-6 container">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <br />
            <input
              type="text"
              value={ApiKey}
              required
              placeholder="Enter your API Key"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <input type="file" onChange={handleFileChange} />
            <br />
            <br />
            <p className="text-center">OR</p>
            <div
              className={`file-drop-area ${isDragging ? "dragging" : ""}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {isDragging ? (
                <p>Drop the files here</p>
              ) : (
                <p>Drag and drop files here</p>
              )}

              {file.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="col-6 container">
          {extractedData ? (
            " "
          ) : (
            <div>Upload your files here to get your important data!</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default FileUpload;
