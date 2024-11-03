import React from 'react'
import { Iroute } from '../routes/routes'
import { Link, Outlet } from 'react-router-dom'

 interface Inavigation {
    routes:Iroute[],
    vertical:boolean
}

const Navigation:React.FC<Inavigation> = ({routes,vertical}) => {
  return (
    <div>
        <nav className={`nav ${vertical ? "vertical" : "horizontal"}`}>
        {routes.map(({path,label}) => (
            <Link to={path}>{label}</Link>
        ))}
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Navigation