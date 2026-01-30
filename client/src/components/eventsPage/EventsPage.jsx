import { useEffect, useState } from "react";
import EventCard from "../eventCard/EventCard";

export default function EventsPage({type}) {
    const [ concerts, setConcerts ] = useState([]);
    const today = new Date().setHours(0, 0, 0, 0);

    useEffect(() =>{
            (async ()=>{
                const response = await fetch('http://localhost:3030/data/concerts');
                const result = await response.json();
                setConcerts(Object.values(result));
            })();
        },[]);

    const upcomingEvents = concerts
        .filter(e => new Date(e.date).getTime() >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date)); 

    const pastEvents = concerts
        .filter(e => new Date(e.date).getTime() < today)
        .sort((a, b) => a.band.localeCompare(b.band));

    return (
     <section className="events-section">
    {type === "upcoming" && (
        <>
            <h3>Upcoming Events</h3>
            <div className="events-grid">
                {upcomingEvents.map(concert => (
                    <EventCard key={concert._id} {...concert} />
                ))}
            </div>
        </>
    )}

    {type === "archive" && (
        <>
            <h3>Concert Archive</h3>
            <div className="events-grid">
                {pastEvents.map(concert => (
                    <EventCard key={concert._id} {...concert} />
                ))}
            </div>
        </>
    )}
</section>
  
    )
}
