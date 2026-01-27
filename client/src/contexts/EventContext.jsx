import { createContext } from "react";
import useRequest from "../hooks/useRequest";

const EventContext = createContext({
    createConcertHandler: () => {},
});

export function EventProvider({ children }) {
    const { request } = useRequest();

    const createConcertHandler = async (concertData) => {
        
        if (Object.values(concertData).some(v => v === '')) {
            throw new Error('All fields are required!');
        }

        const result = await request('/data/concerts', 'POST', concertData);
        return result;
    };

    return (
        <EventContext.Provider value={{ createConcertHandler }}>
            {children}
        </EventContext.Provider>
    );
}

export default EventContext;
