const SelectedCard = ({selectedCard, closeModal}) => {
    if (!selectedCard) return null

    return <div className="selected-card-container">
        <img className="selected-card-img" src={selectedCard.image} alt={selectedCard.title} />
        <h2>{selectedCard.title}</h2>
        <p>{selectedCard.text}</p>
        <button onClick={closeModal}>X</button>
    </div>
}

export default SelectedCard