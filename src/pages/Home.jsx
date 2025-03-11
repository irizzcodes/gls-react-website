import CardLayout from "../components/CardLayout";
import Footer from "../components/Footer";
import MainImage from "../components/MainImage";
import { useState } from "react";
import "../css/styles.css";
function Home() {
    const [mainImages, setMainImages] = useState([
        {
        image: "/assets/cecilia.png",
        },
      ]);
    

    return <div className="home">
        <MainImage image={mainImages[0].image} />
        <CardLayout />
        <Footer />
    </div>

}

export default Home;