import { addTimeToDate } from './index.js'

// The number 24 * 60 * 60 * 1000 is used to convert milliseconds to days. 
// This equation is used in the object to map the review interval to a number of days.
const REVIEW_INTERVALS = {
    0: 0, // New cards reviewed same day
    1: 24 * 60 * 60 * 1000, // Bad cards reviewed the next day
    2: 3 * 24 * 60 * 60 * 1000, // OK cards reviewed every 3 days
    3: 6 * 24 * 60 * 60 * 1000  // Good cards reviewed every 6 days
}

// Function to calculate the next review date based on the current box count
export function getNextReviewDate(currentBox, lastReviewed) {
    return addTimeToDate(lastReviewed, REVIEW_INTERVALS[currentBox]);
}
