import { useEffect, useState } from 'react'

const UseEffect = () => {
    let [mouseCord, setmouseCord] = useState({ x: 0, y: 0 });
    let functionData = (e) => {
        setmouseCord({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
        window.addEventListener("mousemove", functionData)
        return () => {window.removeEventListener("mousemove",functionData)}
    }, [mouseCord])
    return (
        <div style={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
            <h3>X : {mouseCord.x}</h3>
            <h3>Y : {mouseCord.y}</h3>
        </div>
    )
}

export default UseEffect