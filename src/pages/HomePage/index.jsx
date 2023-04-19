import React from 'react'
import { useTheme } from '../../contexts'

export default function HomePage() {
    const {theme} = useTheme()
    return (
        <>
            <div>
                <h1 style={{color: `${theme.primText}`}}>おはよう, user</h1>
            </div>
            <div className='study-quota' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                <div className='quota-block1'>
                    <p className='quota-title'><span>Daily Study Quota</span></p>
                    <img src="src\assets\imgs\night.png" alt="" />
                </div>
                <div className='quota-block2' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                    <p>You're currently on a <span className='streak-count'>4</span> day learning streak, keep it up!</p>
                    <div className='reviews'>
                        <p><span>Reviews</span></p>
                        <p><span className='review-color'>120</span> remaining</p>
                    </div>
                    <div className='lessons'>
                        <p><span>Lessons</span></p>
                        <p><span className='learn-color'>120</span> remaining</p>
                    </div>
                </div>
                <a href='#' style={{marginLeft: ''}}>Quick Study</a>
            </div>
            <div className='block-container' >
                <div className='review' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                    <div className='review-block'>
                        <p className='review-title'><span className='review-color'>Review</span></p>
                        <img src="src\assets\imgs\review-icon.png" alt="" />
                    </div>
                    <div className='review-block'>
                        <p>Review all the things you've learnt before</p>
                        <p><span className='review-color'>120</span> to review</p>
                    </div>
                    <a href='#'>Go Review</a>
                </div>
                <div className='learn' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
                    <div className='learn-block'>
                        <p className='learn-title'><span className='learn-color'>Learn</span></p>
                        <img src="src\assets\imgs\review-icon.png" alt="" />
                    </div>
                    <div className='learn-block'>
                        <p>Learn new topics</p>
                        <p><span className='learn-color'>120</span> to learn</p>
                    </div>
                    <a href='#'>Go Learn</a>
                </div>
            </div>
        </>
    )
}
