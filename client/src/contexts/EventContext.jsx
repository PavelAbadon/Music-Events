import { createContext } from "react";
import useRequest from "../hooks/useRequest";

const EventContext = createContext({
    createConcertHandler: () => {},
    editConcertHandler: () => {},
});

export function EventProvider({ children }) {
    const { request } = useRequest();

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

    return (
        <EventContext.Provider value={{ createConcertHandler, editConcertHandler }}>
            {children}
        </EventContext.Provider>
    );
}

export default EventContext;
