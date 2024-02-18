import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  // console.log(grid);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos?client_id=8Msg2fVKzUJTDhGV_fDYbUdOHjnj3NFgeOhAlv1QL84"
      );
      const data = await response.json();
      // console.log(data);
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="images-wrapper">
        {images?.map((image, key) => (
          <div key={key} className="image">
            <img src={image.urls.small} alt="tasweer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
