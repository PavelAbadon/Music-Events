import { createContext } from "react";
import useRequest from "../hooks/useRequest";
import { useNavigate } from "react-router";

const EventContext = createContext({
    createConcertHandler: () => {},
    editConcertHandler: () => {},
    deleteConcertHandler: () => {},
});

export function EventProvider({ children }) {
    const { request } = useRequest();
    const navigate = useNavigate()

    const createConcertHandler = async (concertData) => {
        if (Object.values(concertData).some(v => v === '')) {
            throw new Error('All fields are required!');
        }

        return await request('/data/concerts', 'POST', concertData);
    };

    const editConcertHandler = async (concertId, concertData) => {
        if (Object.values(concertData).some(v => v === '')) {
            throw new Error('All fields are required!');
        }

        return await request(`/data/concerts/${concertId}`, 'PUT', concertData);
    };

    const deleteConcertHandler = async (concertId) => {
        try {
            await request(`/data/concerts/${concertId}`, 'DELETE');

            navigate('/');
            } catch (err) {
            alert('Unable to delete concert: ', err.message);
        }

    }

    return (
        <EventContext.Provider value={{ createConcertHandler, editConcertHandler, deleteConcertHandler }}>
            {children}
        </EventContext.Provider>
    );
}

export default EventContext;
