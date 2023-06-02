import "./service-card.css";

function ServiceCard({ item }) {
    const { imgUrl, title, desc } = item;

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="ServiceImg" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
}

export default ServiceCard;