import Card from './Card'
import SelectedCard from './SelectedCard'
import { useState, useEffect } from 'react';
import '../css/cards.css'

const CardLayout = ( { selectedLocation }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/cards.json')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error fetching data:", error))
    }, []);

    const openModal = (card) => {
        setSelectedCard(card);
    }          

    const closeModal = () => {
        setSelectedCard(null);
    }

    const formattedLocation = selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1).toLowerCase();

    const filteredCard = cards.filter(
        card => card.region === formattedLocation
    )

    return <div className="card-container">
        {filteredCard.length > 0 ? (
            filteredCard.map((card, index) => (
                <Card key={index} title={card.title} search={card.search}
                image={card.image} openModal={() => openModal(card)} />
            ))
        ) : (
            <p>No cards found</p>
        )
        }
        {selectedCard && <SelectedCard selectedCard={selectedCard} closeModal={closeModal} />}
    </div>

};

export default CardLayout