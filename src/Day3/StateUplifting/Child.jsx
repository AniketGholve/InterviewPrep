/* eslint-disable react/prop-types */
import { useState } from 'react'

const Child = (props) => {
  let [name, setName] = useState();
  const handleSubmit = () => {
    props.setData(name)
  }
  return (
    <>
      <label htmlFor="">Name</label>
      <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Child