import styles from './styles.module.css'
import logo from '../../assets/imgs/Kaizen-icon.svg'

export default function UserForm({ onSubmit = e => { e.preventDefault() }, children, error, buttonLabel = 'Login' }) {
    return (
        <form className={styles["user-form"]} onSubmit={onSubmit}>
            <div className={styles["logo"]}>
                <img src={logo} alt="" />
                <h2>Kaizen</h2>
            </div>

            {error ? <p className={styles["error"]}>{error}</p> : null}

            <div className={styles["input-group"]}>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                </div>

                <button>{buttonLabel}</button>
            </div>
            {children}
        </form>
    )
}