import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router";
import useRequest from "../../hooks/useRequest";
import UserContext from "../../contexts/UserContext";

export default function EventDetails() {
    const { concertId } = useParams();
    const { request } = useRequest();
    const { user } = useContext(UserContext);

    const [concert, setConcert] = useState(null);

    useEffect(() => {
        request(`/data/concerts/${concertId}`)
            .then(setConcert)
            .catch(err => console.error(err));
    }, [concertId, request]);

    if (!concert) {
        return <p className="loading">Loading...</p>;
    }

    const isOwner = user?._id === concert._ownerId;

    return (
        <section className="event-details">
            <div className="details-card">
                <img src={concert.imageUrl} alt={concert.band} />

                <div className="details-info">
                    <h2>{concert.band}</h2>

                    <p><strong>Date:</strong> {concert.date}</p>
                    <p><strong>Location:</strong> {concert.location}</p>
                    <p><strong>Genre:</strong> {concert.genre}</p>
                    <p><strong>Audience:</strong> {concert.audience}</p>

                    <p className="summary">{concert.summary}</p>

                    {isOwner && (
                        <div className="details-actions">
                            <Link to={`/concerts/${concertId}/edit`} className="btn edit">
                                Edit
                            </Link>
                            <Link to={`/concerts/${concertId}/delete`} className="btn delete">
                                Delete
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
