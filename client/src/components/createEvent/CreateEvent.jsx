import { useContext } from "react";
import { useNavigate } from "react-router";
import EventContext from "../../contexts/EventContext";
import useForm from "../../hooks/useForm";

export default function CreateEvent() {
    const navigate = useNavigate();
    const { createConcertHandler } = useContext(EventContext);

    const submitHandler = async (values) => {
        try {
            const createdConcert = await createConcertHandler(values);
            navigate(`/concerts/${createdConcert._id}/details`);
        } catch (err) {
            alert(err.message);
        }
    };

    const { register, formAction } = useForm(submitHandler, {
        band: '',
        date: '',
        location: '',
        genre: '',
        audience: '',
        imageUrl: '',
        summary: '',
    });

    return (
        <section className="event-form-page">
            <div className="form-card">
                <h2>Create New Concert</h2>

                <form className="event-form" action={formAction}>
                    <label>
                        Band Name
                        <input type="text" {...register('band')} />
                    </label>

                    <label>
                        Date
                        <input type="date" {...register('date')} />
                    </label>

                    <label>
                        Location
                        <input type="text" {...register('location')} />
                    </label>

                    <label>
                        Genre
                        <input type="text" {...register('genre')} />
                    </label>

                    <label>
                        Audience
                        <input type="number" {...register('audience')} />
                    </label>

                    <label>
                        Image URL
                        <input type="text" {...register('imageUrl')} />
                    </label>

                    <label>
                        Summary
                        <textarea rows="4" {...register('summary')} />
                    </label>

                    <button className="btn submit-btn">Create Event</button>
                </form>
            </div>
        </section>
    );
}
