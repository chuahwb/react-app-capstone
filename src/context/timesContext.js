import { createContext, useContext, useState } from "react";

const TimesContext = createContext(undefined);

export const TimesProvider = ({ children }) => {
    const [timeSlot, setTimeSlot] = useState(null);
    return (
        <TimesContext.Provider
            value={{
                timeSlot: timeSlot,
                onSave: (times) => setTimeSlot(times),
            }}
        >
            {children}
        </TimesContext.Provider>
    )
}

export const useTimesContext = () => useContext(TimesContext);