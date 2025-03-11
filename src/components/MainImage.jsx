import '../css/mainImages.css'

const MainImage = ({ image, changeImage }) => {
    
    return <>
    <div className="image-container">
        <img src={image} alt="Main Image" 
        className="main-image"/>
    </div>
    <div className="image-buttons-container">
        <button className="image-button">
            <img src="/assets/mondstadt.png" onclick={changeImage} />
        </button>
        <button className="image-button">
            <img src="/assets/liyue.png" onclick={changeImage} />
        </button>
        <button className="image-button">
            <img src="/assets/inazuma.png" onclick={changeImage} />
        </button>
        <button className="image-button">
            <img src="/assets/sumeru.png" onclick={changeImage} />
        </button>
        <button className="image-button">
            <img src="/assets/fontaine.png" onclick={changeImage} />
        </button>
        <button className="image-button">
            <img src="/assets/natlan.png" onclick={changeImage} />
        </button>
    </div>
    </>

}

export default MainImage