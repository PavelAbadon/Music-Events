import { useState, useEffect } from "react";
import EventCard from "../eventCard/EventCard";

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState("upcoming"); // default

    useEffect(() => {
        fetch("http://localhost:3030/data/concerts")
            .then(res => res.json())
            .then(data => setEvents(Object.values(data)));
    }, []);

    const today = new Date().setHours(0, 0, 0, 0);

    const filteredEvents = events
        .filter(e =>
            filter === "upcoming"
                ? new Date(e.date).getTime() >= today
                : new Date(e.date).getTime() < today
        )
        .sort((a, b) =>
            filter === "upcoming"
                ? new Date(a.date) - new Date(b.date)
                : a.band.localeCompare(b.band)
        );

    return (
        <section className="events-page">
            <h2>Events</h2>

            {/* 🔽 DROPDOWN */}
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="events-filter"
            >
                <option value="upcoming">Upcoming Events</option>
                <option value="archive">Concert Archive</option>
            </select>

            <div className="events-grid">
                {filteredEvents.map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </section>
    );
}
