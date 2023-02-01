export interface TypeHotel {
    id: string,
    city: string,
    image: string,
    rooms:
    {
        type: string,
        number: number,
        occupancy: number
    }[]
}