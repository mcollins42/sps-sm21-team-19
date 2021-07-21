import { Link } from 'react-router-dom'
import React from "react";

const AllDrugs = () => {

    const [drugs, setDrugs] = React.useState([])

    React.useEffect(() => {
        const getData = async () =>{
            const data = await fetch('/list-drugs')
            const allDrugsInfo = await data.json()
            setDrugs(allDrugsInfo)
        }
        getData()
    }, [])
    
    return(
        <div className="container justify-content-center">
            <h1 className="my-4 text-center">All drugs</h1>
            <div className="mx-5 px-5">
                {
                    drugs.map( item => (
                        <div className='p-3' key={item.id}>
                            <h4 className="text-center"><Link to = {`/drug/${item.id}`}>
                                {item.name}
                            </Link></h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllDrugs;