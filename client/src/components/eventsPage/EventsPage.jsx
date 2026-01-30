import { useEffect, useState } from "react";
import EventCard from "../eventCard/EventCard";

export default function EventsPage({type}) {
    const PAGE_SIZE = 6;
    const [ concerts, setConcerts ] = useState([]);
    const [page, setPage] = useState(1);
    const today = new Date().setHours(0, 0, 0, 0);

    useEffect(() => {
    fetch('http://localhost:3030/data/concerts')
        .then(res => res.json())
        .then(data => setConcerts(Object.values(data)));
    }, []);

    useEffect(() => {
        setPage(1);
    }, [type]);


    
    const filteredConcerts = concerts.filter(e =>
    type === 'upcoming'
        ? new Date(e.date).getTime() >= today
        : new Date(e.date).getTime() < today
    );

    const start = (page - 1) * PAGE_SIZE;
    const pagedConcerts = filteredConcerts.slice(start, start + PAGE_SIZE);

    let visibleConcerts = [];

    switch (type) {
        case 'upcoming':
            visibleConcerts = pagedConcerts.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );
            break;

        case 'archive':
            visibleConcerts = pagedConcerts.sort(
                (a, b) => a.band.localeCompare(b.band)
            );
            break;

        default:
            visibleConcerts = pagedConcerts;
    }



    return (
    <section className="events-section">
    {type === "upcoming" && (
        <>
            <h3>Upcoming Events</h3>
            <div className="events-grid">
                {visibleConcerts.map(concert => (
                    <EventCard key={concert._id} {...concert} />
                ))}
            </div>
        </>
    )}

    {type === "archive" && (
        <>
            <h3>Concert Archive</h3>
            <div className="events-grid">
                {visibleConcerts.map(concert => (
                    <EventCard key={concert._id} {...concert} />
                ))}
            </div>
        </>
    )}

    <div className="pagination">
        <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
        >
            Prev
        </button>

        <span>Page {page}</span>

        <button
            disabled={visibleConcerts.length < PAGE_SIZE}
            onClick={() => setPage(p => p + 1)}
        >
            Next
        </button>
    </div>
    </section>

  
    )
}
