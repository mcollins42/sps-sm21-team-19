import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleDrug = () => {

    const {search} = useLocation()
    const query = new URLSearchParams(search)

    const id = query.get("id");
    //console.log(id)

    //const {id} = useParams()
    
    const [drug, setDrug] = React.useState([])

    React.useEffect(() => {
        const getData = async () =>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const drugInfo = await data.json()
            setDrug(drugInfo)
            //console.log(drugInfo)
        }
        getData()
    }, [id])

    
    
    return (
        <div>
            <h3>{drug.name}</h3>
            <p>{drug.email}</p>
        </div>
    )
}

export default SingleDrug
