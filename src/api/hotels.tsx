
import { allHotels } from "../constanst/allHotels";
export const hotelsApi = {
    getAll: function (city: string,) {
        return allHotels.filter(n => n.city.includes(city))

    }
}
