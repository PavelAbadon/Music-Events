import { useEffect, useState } from "react";
import EventCard from "../eventCard/EventCard";


export default function Home(){
    const [ concerts, setConcerts ] = useState([]);

    useEffect(() =>{
        (async ()=>{
            const response = await fetch('http://localhost:3030/data/concerts');
            const result = await response.json();
            setConcerts(Object.values(result));
        })();
    },[]);

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
            <div className="events-grid">
                { concerts.map(concert => ( <EventCard key={concert._id} {...concert} /> ))}
            </div>

            </section>

            <section className="events-section">
            <h3>Concert Archive</h3>
            <div className="events-grid">
                <div className="event-card">
                <img
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                    alt="Dark Throne Festival"
                />
                <h4>Dark Throne Festival</h4>
                <p>12 July 2026 · Sofia</p>
                </div>

                <div className="event-card">
                <img
                    src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                    alt="Underground Metal Night"
                />
                <h4>Underground Metal Night</h4>
                <p>5 August 2026 · Plovdiv</p>
                </div>

                <div className="event-card">
                <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                    alt="Extreme Metal Concert"
                />
                <h4>Extreme Metal Concert</h4>
                <p>20 September 2026 · Varna</p>
                </div>
            </div>
            </section>
        </main>
      </div>
    )
}