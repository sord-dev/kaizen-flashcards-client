import React from 'react'
import { useTheme } from '../../contexts'
import { useCalculateTime } from '../../hooks/useCalculateTime'
import { useAuthContext } from '../../contexts/authContext'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const { theme } = useTheme()
    const { user } = useAuthContext()
    let time = useCalculateTime();

    return (
        <>
            <div>
                <h1 style={{ color: `${theme.primText}` }}>{time} {user ? user.username : 'guest'}</h1>
            </div>

            {user ? <OverviewCard streak={user.streak.count}/> : <OverviewCard />}
            <div className='block-container' >
                <div className='review' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
                    <div className='review-block'>
                        <p className='review-title'><span className='review-color'>Review</span></p>
                        <img src="src\assets\imgs\review-icon.png" alt="" />
                    </div>
                    <div className='review-block'>
                        <p>Review all the things you've learnt before</p>
                        <p><span className='review-color'>120</span> to review</p>
                    </div>
                    <Link to='/decks'>Go Review</Link>
                </div>
                <div className='learn' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
                    <div className='learn-block'>
                        <p className='learn-title'><span className='learn-color'>Learn</span></p>
                        <img src="src\assets\imgs\review-icon.png" alt="" />
                    </div>
                    <div className='learn-block'>
                        <p>Learn new topics</p>
                        <p><span className='learn-color'>120</span> to learn</p>
                    </div>
                    <Link to='/decks'>Go Learn</Link>
                </div>
            </div>
        </>
    )
}


function OverviewCard({ streak = 0, reviews = 0, lessons = 0 }) {
    const { theme } = useTheme()

    return (
        <div className='study-quota' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
            <div className='quota-block1'>
                <p className='quota-title'><span>Daily Study Quota</span></p>
                <img src="src\assets\imgs\night.png" alt="" draggable='false' />
            </div>
            <div className='quota-block2' style={{ backgroundColor: `${theme.primBG}`, color: `${theme.primText}` }}>
                {
                    streak
                        ? <p>You're currently on a <span className='streak-count'>{streak}</span> day learning streak, keep it up!</p>
                        : <p>Sign in regularly to start an attendance streak and earn rewards!</p>
                }

                <div className='reviews'>
                    <p><span>Reviews</span></p>
                    <p><span className='review-color'>{reviews}</span> remaining</p>
                </div>
                <div className='lessons'>
                    <p><span>Lessons</span></p>
                    <p><span className='learn-color'>{lessons}</span> remaining</p>
                </div>

            </div>
            <Link to='/decks'>Quick Study</Link>
        </div>
    )
} 