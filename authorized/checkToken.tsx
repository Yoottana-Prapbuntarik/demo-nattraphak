import { useEffect, useState } from "react";

 const useAuthentication = (defaultValut: Boolean): any => {
    const [isAuthenticated, setAuthenticated] = useState(defaultValut)
    useEffect(() => {
        if (localStorage.getItem('access-token') && localStorage.getItem('access-token') !== undefined &&
            localStorage.getItem('access-token') !== undefined) {
            setAuthenticated(true)
        }
    }, [])
    return [isAuthenticated, setAuthenticated]
}
export default useAuthentication