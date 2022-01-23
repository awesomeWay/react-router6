import React from 'react'
import { useLocation} from 'react-router-dom'

const AboutIndex = () => {

    const location = useLocation()
    console.log('333',location)
    return (
        <div>about-index</div>
    )
}

export default AboutIndex