import React, { useState, createContext } from "react"

export const TruckContext = createContext()

export const TruckProvider = (props) => {
    const [trucks, setTrucks] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const fetchTrucks = async () => {
        const res = await fetch("http://localhost:8088/sellers?_expand=truckType")
        const data = await res.json() 
        setTrucks(data)
    }
    
    return (
        <TruckContext.Provider value={{
            trucks, fetchTrucks, searchTerms, setSearchTerms
        }}>
            {props.children}
        </TruckContext.Provider>
    )
}