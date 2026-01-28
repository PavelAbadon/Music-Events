import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import EventContext from "../../contexts/EventContext";

export default function DeleteEvent() {
    const { concertId } = useParams();
    const navigate = useNavigate();
    const { deleteConcertHandler } = useContext(EventContext);

    const onDelete = async () => {
        const confirmed = confirm('Are you sure you want to delete this concert?');

        if (!confirmed) return;

        await deleteConcertHandler(concertId);
        navigate('/');
    };

    return onDelete();
}
