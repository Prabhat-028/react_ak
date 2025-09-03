import { useEffect, useState } from "react"

const useRestaurantData = () => {

    const [fetchData, setfetchData] = useState(null);
    
    const actualData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const resData = await data.json();
        setfetchData(resData);
    }
    useEffect(() => {
        actualData();
    }, []);
    return fetchData;
};
export default useRestaurantData;