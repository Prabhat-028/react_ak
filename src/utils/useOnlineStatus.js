import { useEffect, useState } from "react";

const useOnlineStaus = () => {

    const [onlineStatus, setonlineStatus] = useState(true);

    //check if user is online or not
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        });

        window.addEventListener("online", () => {
            setonlineStatus(true);
        });
    }, []);
    //onlineStatus is bool value
    return onlineStatus;
}
export default useOnlineStaus;