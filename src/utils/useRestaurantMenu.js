import { useState,useEffect } from "react"
import { MENU_URL } from "./constans"

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const fetchData = async () => {
        const data = await fetch(`${MENU_URL}&restaurantId=${resId}`);
        const json = await data.json();
        setResInfo(json.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    // console.log(resInfo);
    return resInfo;
};
export default useRestaurantMenu;