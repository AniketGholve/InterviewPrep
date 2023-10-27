import { useParams } from 'react-router-dom'

const Details = () => {
    let id = useParams().id;
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Details : {id}</h1>
        </div>
    )
}

export default Details