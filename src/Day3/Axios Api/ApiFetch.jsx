import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiFetch = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            {
                data.map((item, key) => <h1 key={key}>{item.name}</h1>)
            }
        </div>
    )
}

export default ApiFetch