
import {useState} from 'react';

const useLoggedIn = () => {
    const [currentUser, applyUser] = useState(localStorage.user)
    console.log(currentUser)

    return currentUser
}

export default useLoggedIn;