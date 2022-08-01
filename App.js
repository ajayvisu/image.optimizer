import React from "react";
import "./App.css";
import Compress from "react-image-file-resizer";
import Base64Downloader from "react-base64-downloader";
import { triggerBase64Download } from "react-base64-downloader";

// const base64 = "data:image/jpeg;base64,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";

function App() {
  const [img, setImg] = React.useState();
  const [data, setData] = React.useState('');
  const handleChange = () => {
    console.log(img);
   
    Compress.imageFileResizer(
      img, // the file from input
      480, // width
      480, // height
      "JPEG", // compress format WEBP, JPEG, PNG
      70, // quality
      0, // rotation
      (uri) => {
        console.log(uri);
        setData(uri)
      },
      "base64"
    );
  };
  // let base64 = uri;
  return (
    <div className="App">
      <input type="file" onChange={(event) => setImg(event.target.files[0])} />
      <button onClick={handleChange}>Submit</button>
      <Base64Downloader base64={data} downloadName="image.opti_01">
        Click to download
      </Base64Downloader>
      
      {/* <button onClick={() => triggerBase64Download(base64, "my_download_name")}>
        Click to download
      </button>
      ; */}
    </div>
  );
}

export default App;
