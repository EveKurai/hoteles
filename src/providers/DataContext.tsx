import React, { useContext, useEffect, useState } from 'react'
import { hotelsApi } from '../api/hotels'
import { hotels } from '../constanst/hotels'
import { TypeHotel } from '../Interfaces/hotel.interface'

type DataContext = {
    setCity: React.Dispatch<React.SetStateAction<string>>
    allHotels: TypeHotel[]
    loading: boolean
}

const DataContext = React.createContext<DataContext>({} as DataContext)

export const DataProvider = (props: { children: JSX.Element }) => {
    const { children } = props
    const [allHotels, setAllHotels] = useState<TypeHotel[]>([])
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            setAllHotels(hotelsApi.getAll(city))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (city) {
            getData()
        }
        else {
            setAllHotels(hotels)
            setLoading(false)
        }
    }, [city]);

    return (
        <DataContext.Provider value={{ setCity, allHotels, loading }}>
            {children}
        </DataContext.Provider>)
}

export default function useData() {
    return useContext(DataContext)
}