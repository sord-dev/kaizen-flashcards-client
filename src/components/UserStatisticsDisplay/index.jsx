import { useTheme } from '../../contexts'
import styles from './styles.module.css'

export default function UserStatisticsDisplay({ userStats = { amount: 0, correct: 0 } }) {
    const { theme } = useTheme()

    return (
        <div className={styles['stats-display']} style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
            <h2 style={{ color: theme.primText }}>User Statistics</h2>

            <div className={styles['stats-grid']}>
            
                <UserStatGridItem
                    tag={'Total Seen Cards'}
                    description={'These are all the cards you’ve seen.'}
                    number={userStats.amount} />

                <UserStatGridItem
                    tag={'Total Correct Cards'}
                    description={'All of the cards you’ve gotten right.'}
                    number={userStats.correct} />

                <UserStatGridItem
                    tag={'New Cards'}
                    description={'Total cards in all decks.'} number={0} />

                <UserStatGridItem
                    tag={'Correct Percentage'}
                    description={'Percentage for answers to all cards.'}
                    number={!userStats.amount == 0 ? Math.round((userStats.correct / userStats.amount) * 100) + "%" : 0} />

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