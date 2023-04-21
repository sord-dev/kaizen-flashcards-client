import { useEffect, useState } from 'react'

export function useCalculateTime() {
    let [time, setTime] = useState('Morning')

    useEffect(() => {
        var curHr = new Date().getHours()
        let time;

        if (curHr < 12) {
            time = "¡Buenos días!"; // es
        } else if (curHr < 18) {
            time = "Boa tarde!"; // pt
        } else {
            time = "God kväll!"; // swe
        }

        setTime(time);
    }, [])

    return time;
}

