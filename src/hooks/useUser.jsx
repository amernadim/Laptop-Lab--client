import { useEffect, useState } from "react"

const useUser = (email) => {
    const [isUser, setIsUser] = useState(false);
    const [isSellerLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/role/${email}`)
                .then(res => res.json())
                .then(data => {                   
                    setIsUser(data.isUser);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [isUser, isSellerLoading]
}

export default useUser;