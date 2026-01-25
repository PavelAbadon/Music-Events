import { Link } from "react-router";

export default function EventCard ({
    band,
    imageUrl,
    date,
    _id,
    location
}){
    return (
        <Link to={`/concerts/${_id}/details`} className="event-card">
            <img src={imageUrl} alt={band} />
            <h4>{band}</h4>
            <p>{date} · {location}</p>
        </Link>
    )
}