import CardLayout from "../components/CardLayout";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import { useState, useEffect } from "react";
import "../css/styles.css";
function Home() {
    const [mainImages, setMainImages] = useState([]);

    useEffect(() => {
        fetch('/mainImages.json')
        .then(response => response.json())
        .then(data => setMainImages(data))
        .catch(error => console.error("beep boop error mainImages not found", error))

    }, []);

    

    return <div className="home">
        {mainImages.length > 0 ? (
                <MainImage image={mainImages[0].image} />
            ) : (
                <p>Loading...</p> // Display a placeholder while loading
            )}
        <CardLayout />
        <Footer />
    </div>

}

export default Home;