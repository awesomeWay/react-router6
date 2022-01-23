/*
 * @Author: sheng.Zhang
 * @Date: 2022-01-20 14:25:28
 * @LastEditors: sheng.Zhang
 * @LastEditTime: 2022-01-20 17:48:03
 * @Description: 
 */
import React from 'react'
import { Outlet } from 'react-router'

const About = () => {
    return (
        <div>about
            <Outlet/>
        </div>
    )
}

export default About