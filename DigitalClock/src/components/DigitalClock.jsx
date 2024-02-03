import { useEffect, useState } from "react";

const DigitalClock = ()=>{
    const [time, setTime] = useState(new Date());
useEffect(()=>{
    //Update the time every second
    const intervalID = setInterval(() => {
        setTime(new Date());
        
    }, 1000);

    // Clear the interval when the component is unmounted

    return ()=> clearInterval(intervalID);
},[]);  // The empty dependency array ensures that the effect runs only once when the component mounts.

    const hours = time.getHours().toString().padStart(2,'0')
    const minutes = time.getMinutes().toString().padStart(2,'0')
    const seconds = time.getSeconds().toString().padStart(2,'0')

    return(
        <div>
        <h1>Digital Clock</h1>
        <p>{`${hours}:${minutes}:${seconds}`}</p>
        </div>

    )

}

export default DigitalClock;