import '../css/mainImages.css'

const MainImage = ({ image, changeImage }) => {
    
    return <>
    <div className="image-container">
        <img src={image} alt="Main Image" 
        className="main-image"/>
    </div>
    <div className="image-buttons-container">
        <button className="image-button">
            <img src="/assets/mondstadt.png" onClick={() => changeImage("mondstadt")} />
        </button>
        <button className="image-button">
            <img src="/assets/liyue.png" onClick={() => changeImage("liyue")} />
        </button>
        <button className="image-button">
            <img src="/assets/inazuma.png" onClick={() => changeImage("inazuma")} />
        </button>
        <button className="image-button">
            <img src="/assets/sumeru.png" onClick={() => changeImage("sumeru")} />
        </button>
        <button className="image-button">
            <img src="/assets/fontaine.png" onClick={() => changeImage("fontaine")} />
        </button>
        <button className="image-button">
            <img src="/assets/natlan.png" onClick={() => changeImage("natlan")} />
        </button>
    </div>
    </>

}

export default MainImage