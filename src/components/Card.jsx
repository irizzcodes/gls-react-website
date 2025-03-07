

const Card = ({ image, title, search, openModal}) =>{


    return <div className="card">
        <img src={image} alt={title} className="card-image"/>
        <h2>{title}</h2>
        <p>{search}</p>
        <button className="card-button" onClick={openModal}>Read More</button>
    </div>
}

export default Card;