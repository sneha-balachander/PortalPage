import React from "react";
import classes from './FileDownload.css'
const FileDownload = (props) =>{
    const handleDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "Testing.txt"; 
        downloadLink.download = "Updated_document.txt"; 
        downloadLink.click();
        
      };
     
      return (
        <div className={classes.container}>
      <div className={classes.textContainer}>
        <p>Here's the Updated document. Click the button to download it:</p>
        
      </div>
      <button className={classes.downloadButton} onClick={handleDownload}>
        Download File
      </button>
    </div>
      );
}
export default FileDownload;