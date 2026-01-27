import { createContext } from "react";
import useRequest from "../hooks/useRequest";
import { useParams } from "react-router";

const EventContext = createContext({
    createConcertHandler: () => {},
    editConcertHandler: () =>{}
});

export function EventProvider({ children }) {
    const { concertId } = useParams()
    const { request } = useRequest();

    const createConcertHandler = async (concertData) => {
        
        if (Object.values(concertData).some(v => v === '')) {
            throw new Error('All fields are required!');
        }

        const result = await request('/data/concerts', 'POST', concertData);
        return result;
    };

    const editConcertHandler = async (concertData) =>{
        
        if (Object.values(concertData).some(v => v === '')) {
            throw new Error('All fields are required!');
        }

        const result = await request(`/data/concerts/${concertId}`, 'PUT', concertData);
        return result;
    }

    return (
        <EventContext.Provider value={{ createConcertHandler, editConcertHandler }}>
            {children}
        </EventContext.Provider>
    );
}

export default EventContext;
