import { auth, firestore } from '../lib/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'

export function useUserData() {
    const [user] = useAuthState(auth)
    console.log('⚡ user', user)
    const [username, setUsername] = useState(null)

    // useEffect(() => {
    //     // turn off realtime subscription
    //     let unsubscribe
    //     if (user) {
    //         const ref = collection(firestore, "users", user.id)
    //         unsubscribe = ref.onSnapshot(doc => {
    //             setUsername(doc.data().username)
    //         })
    //     } else {
    //         setUsername(null)
    //     }
    //     return unsubscribe
    // }, [user])
    // getDocs(collection(firestore, "users")).then(docs => console.log("⚡querySnapshot",docs))

    useEffect(()=>{
        if(user){
            setUsername(user?.displayName)
        } else{
            setUsername(null)
        }
    },[user])

    return { user, username }
}