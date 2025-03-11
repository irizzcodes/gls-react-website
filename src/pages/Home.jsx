import CardLayout from "../components/CardLayout";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import { useState, useEffect } from "react";
import "../css/styles.css";
function Home() {
    const [mainImages, setMainImages] = useState([]);
    const [selectImage, setSelectedImage] = useState("mondstadt");

    useEffect(() => {
        fetch('/mainImages.json')
        .then(response => response.json())
        .then(data => setMainImages(data))
        .catch(error => console.error("beep boop error mainImages not found", error))
    }, []);

    const currentMainImage = 
        mainImages.find(mainImages => mainImages.location === selectImage);

    const changeLocation = (newLocation) => {
        setSelectedImage(newLocation);
    }

    

    return <div className="home">
        {mainImages.length > 0 ? (
                <MainImage image={currentMainImage?.image}  changeImage={changeLocation} />
            ) : (
                <p>Loading...</p> // Display a placeholder while loading
            )}
        <CardLayout selectedLocation={selectImage} mainImages={currentMainImage}/>
        <Footer />
    </div>

}

export default Home;