export default function EventCard ({
    band,
    imageUrl,
    date,
    location
}){
    return (
        <div className="event-card">
                <img src={imageUrl} alt={band} />
                <h4>{band}</h4>
                <p>{date} · {location}</p>
                </div>
    )
}