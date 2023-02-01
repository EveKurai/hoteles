import imageBarranquilla from '../assets/icons/barranquilla.png';
import imageCali from '../assets/icons/cali.png';
import imageCartagena from '../assets/icons/cartagena.jpg';
import imageBogota from '../assets/icons/bogota.jpg';
export const allHotels = [
    {
        id: "city1", city: "Barranquilla", image: imageBarranquilla, rooms: [
            {
                type: "estandar",
                number: 30,
                occupancy: 4
            }, {
                type: "premium",
                number: 3,
                occupancy: 4
            }, {
                type: "VIP",
                number: 0,
                occupancy: 0
            }
        ]
    },
    {
        id: "city2", city: "Cali", image: imageCali, rooms: [
            {
                type: "estandar",
                number: 0,
                occupancy: 0
            }, {
                type: "premium",
                number: 20,
                occupancy: 6
            }, {
                type: "VIP",
                number: 2,
                occupancy: 6
            }
        ]
    },
    {
        id: "city3", city: "Cartagena", image: imageCartagena, rooms: [
            {
                type: "estandar",
                number: 10,
                occupancy: 8
            }, {
                type: "premium",
                number: 1,
                occupancy: 8
            }, {
                type: "VIP",
                number: 2,
                occupancy: 8
            }
        ]
    },
    {
        id: "city4", city: "Bogotá", image: imageBogota, rooms: [
            {
                type: "estandar",
                number: 20,
                occupancy: 6
            }, {
                type: "premium",
                number: 20,
                occupancy: 6
            }, {
                type: "VIP",
                number: 2,
                occupancy: 6
            }
        ]
    }
];