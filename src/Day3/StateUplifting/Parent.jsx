import { useState } from "react"
import Child from "./Child"

const Parent = () => {
  let [data, setData] = useState("");
  return (
    <>
      <div>Parent name : {data}</div>
      <Child setData={setData} />
    </>
  )
}

export default Parent