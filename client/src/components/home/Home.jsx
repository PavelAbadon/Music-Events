import { useEffect, useState } from "react";
import EventCard from "../eventCard/EventCard";
import { Link } from "react-router";


export default function Home(){
    const [ concerts, setConcerts ] = useState([]);

    useEffect(() =>{
        (async ()=>{
            const response = await fetch('http://localhost:3030/data/concerts');
            const result = await response.json();
            setConcerts(Object.values(result));
        })();
    },[]);

    const today = new Date().setHours(0, 0, 0, 0);

    const upcomingEvents = concerts
        .filter(e => new Date(e.date).getTime() >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    const pastEvents = concerts
        .filter(e => new Date(e.date).getTime() < today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    return(
        <div className="home-page">
            <main className="main-content">
            <section className="hero">
            <h2>Metal Lives Here</h2>
            <p>
                Discover concerts, festivals and underground metal events.
                Join the community and share your own events.
            </p>
            </section>

            <section className="events-section">
            <h3>Upcoming Events</h3>
            <div  className="events-grid">
                {upcomingEvents.map(concert => (<EventCard key={concert._id} {...concert } /> ))}
            </div>

            </section>

            <section className="events-section">
            <h3>Concert Archive</h3>
            <div  className="events-grid">
                {pastEvents.map(concert => (<EventCard key={concert._id} {...concert } /> ))}
            </div>

            </section>
        </main>
      </div>
    )
}