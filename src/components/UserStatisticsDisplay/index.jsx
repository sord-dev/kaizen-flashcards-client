import styles from './styles.module.css'

export default function UserStatisticsDisplay() {
    return (
        <div className={styles['stats-display']}>
            <h2>User Statistics</h2>

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