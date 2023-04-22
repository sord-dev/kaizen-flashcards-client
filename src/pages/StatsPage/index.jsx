import React, { useEffect, useState } from 'react'
import { UserStatisticsDisplay } from '../../components'
import { useAuthContext } from '../../contexts/authContext';


export default function StatsPage() {
    const [userStats, setUserState] = useState({})
    const { user } = useAuthContext()
 
    useEffect(() => {
        const getUserStats = async () => {
            try {
                const resp = await fetch(`http://localhost:3000/auth/stats/${user.user_id}`)
                if (resp.ok) {
                    const data = await resp.json();
         
                    setUserState(data)
                }
            }
            catch (e) {
                console.log(e)
            }
        }
        getUserStats();
    }, [])

    return (
        <>
            <UserStatisticsDisplay userStats={userStats} />
        </>
    )
}
