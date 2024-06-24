import { useState } from "react"
import { Outlet } from "react-router-dom"
import Login from "../pages/Login"

function Layout() {
  const [loded, setLoded] = useState(false)

  return (
    <div className="g_contain">
      {!loded ? 
        <Login loded={loded} setLoded={setLoded}/>:
        <div className="main_page">
          <div className="main_page_container">
            <ul>
              <li>
                <a href="/home">home</a>
              </li>
              <li>
                <a href="/new">new</a>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      }   
    </div>
  )
}

export default Layout