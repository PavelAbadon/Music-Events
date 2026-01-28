import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import EventContext from "../../contexts/EventContext";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";

export default function EditEvent() {
    const navigate = useNavigate();
    const { concertId } = useParams();
    const { editConcertHandler } = useContext(EventContext);
    const { request } = useRequest();

    const submitHandler = async (values) => {
        try {
            const editedConcert = await editConcertHandler(concertId, values);
            navigate(`/concerts/${editedConcert._id}/details`);
        } catch (err) {
            alert(err.message);
        }
    };

    const { register, formAction, setValues, values } = useForm(submitHandler, {
        band: '',
        date: '',
        location: '',
        genre: '',
        audience: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        request(`/data/concerts/${concertId}`)
            .then(data => setValues(data))
            .catch(err => alert(err.message));
    }, [concertId]);

    return (
        <section className="event-form-page">
            <div className="form-card">
                <h2>Edit {values.band || "Concert"} Concert</h2>

                <form className="event-form" action={formAction}>
                    <label>Band Name <input {...register('band')} /></label>
                    <label>Date <input type="date" {...register('date')} /></label>
                    <label>Location <input {...register('location')} /></label>
                    <label>Genre <input {...register('genre')} /></label>
                    <label>Audience <input type="number" {...register('audience')} /></label>
                    <label>Image URL <input {...register('imageUrl')} /></label>
                    <label>Summary <textarea {...register('summary')} /></label>

                    <button className="btn submit-btn">Edit Event</button>
                </form>
            </div>
        </section>
    );
}
