const Modal = ({image,title,description,closeClick}) => {
    return <div>
        <img src={image} alt={title}/>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button> onclick={closeClick}X</button>
        </div>
    </div>


}

export default Modal;