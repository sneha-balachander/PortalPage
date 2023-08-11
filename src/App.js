import React from "react";
import NavBar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
<<<<<<< HEAD
import FileDownload from "./components/FileDownload";
=======

>>>>>>> 28cbbe175bfad8742a5be34ebd856dcf94df9409
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
