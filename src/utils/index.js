export * from './leitner.js'

export function addTimeToDate(date, timeToAdd) {
    return new Date(date.getTime() + timeToAdd);
}