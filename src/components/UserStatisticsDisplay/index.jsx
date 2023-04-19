import { useTheme } from '../../contexts'
import styles from './styles.module.css'

export default function UserStatisticsDisplay() {
    const { theme } = useTheme()
    return (
        <div className={styles['stats-display']} style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
            <h2 style={{color: theme.primText}}>User Statistics</h2>

            <div className={styles['stats-grid']}>
                <UserStatGridItem tag={'Total Seen Cards'} description={'These are all the cards you’ve seen.'} number={0} />
                <UserStatGridItem tag={'Mature Cards'} description={'All of the cards you’ve totally learnt.'} number={0} />
                <UserStatGridItem tag={'New Cards'} description={'Total upcoming cards in all decks.'} number={0} />
                <UserStatGridItem tag={'Learning Cards'} description={'Cards you’re currently learning.'} number={0} />
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