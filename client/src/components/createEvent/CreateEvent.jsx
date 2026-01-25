export default function CreateEvent() {
    return (
        <section className="event-form-page">
            <div className="form-card">
                <h2>Create New Concert</h2>

                <form className="event-form">
                    <label>
                        Band Name
                        <input
                            type="text"
                            name="band"
                            placeholder="Enter band name"
                        />
                    </label>

                    <label>
                        Date
                        <input
                            type="date"
                            name="date"
                        />
                    </label>

                    <label>
                        Location
                        <input
                            type="text"
                            name="location"
                            placeholder="Venue and city"
                        />
                    </label>

                    <label>
                        Genre
                        <input
                            type="text"
                            name="genre"
                            placeholder="Metal genre"
                        />
                    </label>

                    <label>
                        Audience
                        <input
                            type="number"
                            name="audience"
                            placeholder="Expected audience"
                        />
                    </label>

                    <label>
                        Image URL
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="https://..."
                        />
                    </label>

                    <label>
                        Summary
                        <textarea
                            name="summary"
                            rows="4"
                            placeholder="Short description of the event"
                        />
                    </label>

                    <button className="btn submit-btn" type="submit">
                        Create Event
                    </button>
                </form>
            </div>
        </section>
    );
}
