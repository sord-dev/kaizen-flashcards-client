import { useEffect, useState } from 'react'

export function useCalculateTime() {
    let [time, setTime] = useState('Morning')

    useEffect(() => {
        var curHr = new Date().getHours()
        let time;

        if (curHr < 12) {
            time = "おはよう";
        } else if (curHr < 18) {
            time = "こんばんは";
        } else {
            time = "お休み";
        }

        setTime(time);
    }, [])

    return time;
}

