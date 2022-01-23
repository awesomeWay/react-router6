/*
 * @Author: sheng.Zhang
 * @Date: 2022-01-20 14:29:05
 * @LastEditors: sheng.Zhang
 * @LastEditTime: 2022-01-23 17:51:05
 * @Description: 
 */
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