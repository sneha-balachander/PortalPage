import React, { useState } from "react";
import NavBar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
function App() {
  const [checkFileUpload, setcheckFileUpload] = useState(false);
  const handleCheckFileUpload =(flag)=>{
    setcheckFileUpload(flag);
    
  }
  return (
    <div>
      <NavBar />
      <FileUpload setFlag = {handleCheckFileUpload}/>
    </div>
  );
}

export default App;
