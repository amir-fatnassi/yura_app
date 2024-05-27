import { useState } from "react"
import { Outlet } from "react-router-dom"
import Login from "../pages/Login"

function Layout() {
  const [loded, setLoded] = useState(true)

  return (
    <div className="g_contain">
      {loded ? 
        <Login/>:
        <div>
          <h2>HOME PAGE</h2>
          <ul>
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/new">new</a>
            </li>
          </ul>
          <Outlet/>
        </div>
      }   
    </div>
  )
}

export default Layout