
import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

const AboutList = () => {

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    
    // setSearchParams({
    //     name : '888'
    // })

    console.log('111',searchParams) // 6
    console.log('222',params)



    return (
        <div>about-list{params.id}</div>
    )
}

export default AboutList