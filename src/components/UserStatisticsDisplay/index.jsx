import { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import styles from './styles.module.css'
import { useAuthContext } from '../../contexts/authContext';

export default function UserStatisticsDisplay() {
    const { theme } = useTheme()
    const [deck, setDeck] = useState({ cards: [] });
    const { user } = useAuthContext()
    const [userStats,setUserState] = useState({})
    const getUserStats = async()=>{
        try{
            const resp = await fetch(`http://localhost:3000/auth/stats/${user.user_id}`)
            if (resp.ok){
                const data = await resp.json();
                const Obj = {
                    amount : data.amount,
                    correct : data.correct
                }
                console.log("here",Obj)
                setUserState(Obj)
            }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getUserStats();
    },[])
    return (
        <div className={styles['stats-display']} style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
            <h2 style={{color: theme.primText}}>User Statistics</h2>

            <div className={styles['stats-grid']}>
                <UserStatGridItem tag={'Total Seen Cards'} description={"These are all the cards you've seen."} number={userStats.amount} />
                <UserStatGridItem tag={'Total Correct Cards'} description={"All of the cards you've totally learnt."} number={userStats.correct} />
                <UserStatGridItem tag={'New Cards'} description={'Total cards in all decks.'} number={0} />
                <UserStatGridItem tag={'Correct Percentage'} description={'Percentage for answers to all cards.'} number= {!userStats.amount == 0 ? Math.round((userStats.correct/userStats.amount) *100) + "%" : 0} />
            </div>
        </div>
    )
}
function UserStatGridItem({ tag, description, number }) {
    return (
        <div>
            <h3>{tag}</h3>
            <p>{description}</p>
            <span>{number}</span>
        </div>
    )
}