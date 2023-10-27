import { useState } from "react"

const UseState = () => {
    let [data,setData]=useState(1)
  return (
    <div>
        <h1>{data}</h1>
        <button>Increment</button>
    </div>
  )
}

export default UseState