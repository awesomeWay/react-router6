
import type { RouteObject } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import About from '../pages/About'
import Home from '../pages/Home'
import AboutIndex from '../pages/About/Component/AboutIndex'
import AboutList from '../pages/About/Component/AboutList'
import Bussiness from '../pages/Bussiness'


const routes : RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout/>, 
        children: [
            {
                index : true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    { index : true, element: <AboutIndex />},
                    { path : "/about/:id", element :<AboutList />}
                ]
            },
            {
                path: "/bussiness",
                element: <Bussiness />,
            }
        ]
    },
    {
        path: "/sso",
        element: <div>1</div>
    }
]

export default routes