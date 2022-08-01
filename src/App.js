import React from "react";
import "./App.css";
import Compress from "react-image-file-resizer";

function App() {
  const [img, setImg] = React.useState();
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
      },
      "base64"
    );
  };
  return (
    <div className="App">
      <input type="file" onChange={(event) => setImg(event.target.files[0])} />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default App;
