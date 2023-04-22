import styles from './style.module.css'

export default function Switch({ handleChange = () => {}, checked = false }) {
    return (
      <div className={styles["switch-container"]}>
        <i className="fa-regular fa-sun"></i>
        <label className={styles["switch"]} >
          <input type="checkbox" checked={checked} onChange={(e) => handleChange(e)} />
          <span className={styles["slider"]}></span>
        </label>
      </div>
    )
  }