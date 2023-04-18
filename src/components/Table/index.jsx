import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Table({ items = [] }) {
    return (
        <div className={styles["table"]}>
            <header className={styles["table-head"]}>
                <h3>Deck Name</h3>
                <h3>New</h3>
                <h3>To Review</h3>
            </header>

            <div className={styles["table-body"]}>
                {items.length && items.map(i => <TableItem key={i.deck_id} {...i} />)}
                <div className={styles["table-create"]}> <button>Create Deck</button></div>
            </div>
        </div>
    )
}

function TableItem({ deck_id, name }) {
    return (
        <Link to={`${deck_id}`}><div className={styles["table-item"]}> <div >{name}</div> <div className={styles["item-new"]}>0</div> <div className={styles["item-review"]}>0</div> </div></Link>
    )
}