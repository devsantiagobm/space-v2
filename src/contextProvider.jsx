import { createContext, useContext, useState } from "react";
import data from "./data"

export const AppContext = createContext()

export function ContextProvider({children}){
    const [currentDestination, setCurrentDestination] = useState(0)
    const [currentCrew, setCurrentCrew] = useState(0)
    const [currentTechnology, setCurrentTechnology] = useState(0)

    const { crew, destinations, technology} = data
    const value = {
        crew, destinations, technology,
        currentCrew, setCurrentCrew,
        currentDestination, setCurrentDestination,
        currentTechnology, setCurrentTechnology
    }
    return (
        <AppContext.Provider value={ value}>
            {children}
        </AppContext.Provider>
    )
}

export default function useContextApp(){
    return useContext(AppContext)
}